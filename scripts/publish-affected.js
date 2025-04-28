#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Função utilitária para executar comandos no shell
function exec(cmd, options = {}) {
  return execSync(cmd, { encoding: 'utf-8', stdio: 'pipe', ...options }).trim();
}

function getPublishedVersions(packageName) {
  try {
    const output = exec(`npm view ${packageName} versions --json`);
    return JSON.parse(output);
  } catch (e) {
    return [];
  }
}

function calculateNextBetaVersion(currentVersion, publishedVersions) {
  const baseVersion = currentVersion.replace(/-beta\.\d+$/, '');
  const betas = publishedVersions
    .filter((v) => v.startsWith(baseVersion) && v.includes('-beta.'))
    .map((v) => parseInt(v.split('-beta.')[1], 10))
    .filter((n) => !isNaN(n));

  const nextBetaNumber = betas.length ? Math.max(...betas) + 1 : 0;

  return `${baseVersion}-beta.${nextBetaNumber}`;
}

async function main() {
  const affected = process.env.AFFECTED;

  if (!affected) {
    console.log('⚠️ No affected packages detected.');
    return;
  }

  const packages = affected.split(' ').filter(Boolean);

  for (const pkg of packages) {
    console.log(`\n📦 Processing package: ${pkg}`);

    const distPath = path.resolve(__dirname, `../dist/packages/${pkg}`);
    const packageJsonPath = path.join(distPath, 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
      console.error(
        `❌ package.json not found for ${pkg} at ${packageJsonPath}`
      );
      continue;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const packageName = packageJson.name;

    let currentVersion = '0.0.0';
    try {
      currentVersion = exec(`npm view ${packageName} version`);
      console.log(`🔎 Current version on NPM: ${currentVersion}`);
    } catch (e) {
      console.log(
        `ℹ️ Package ${packageName} not found on NPM, assuming new package.`
      );
    }

    let bump = 'patch';
    try {
      bump = exec(`pnpm dlx conventional-recommended-bump -p angular`);
      console.log(`🔎 Recommended bump type: ${bump}`);
    } catch (e) {
      console.error(
        `⚠️ Failed to detect bump type for ${pkg}. Defaulting to patch.`
      );
    }

    const publishedVersions = getPublishedVersions(packageName);
    let nextVersion = '';

    if (currentVersion.includes('-beta.')) {
      nextVersion = calculateNextBetaVersion(currentVersion, publishedVersions);
    } else {
      const bumpedVersion = exec(
        `pnpm dlx semver ${currentVersion} --increment ${bump}`
      );
      nextVersion = calculateNextBetaVersion(bumpedVersion, publishedVersions);
    }

    console.log(`🚀 Next beta version: ${nextVersion}`);

    // Update version in package.json
    packageJson.version = nextVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`✅ Updated version in ${packageJsonPath}`);

    // Publish
    console.log(`🚀 Publishing ${packageName}@${nextVersion} with tag beta...`);
    try {
      exec(`npm publish --access public --tag beta`, { cwd: distPath });
      console.log(`🎉 Successfully published ${packageName}@${nextVersion}`);
    } catch (e) {
      console.error(`❌ Failed to publish ${packageName}. Error: ${e.message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
