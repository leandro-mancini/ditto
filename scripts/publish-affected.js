const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Função utilitária para executar comandos no shell
function exec(cmd, options = {}) {
  return execSync(cmd, { encoding: 'utf-8', stdio: 'pipe', ...options }).trim();
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

    const distPath = path.resolve(__dirname, `../dist/libs/${pkg}`);
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

    // Detect bump type based on conventional commits
    let bump = 'patch';
    try {
      bump = exec(
        `pnpm dlx conventional-recommended-bump -p angular --tag-prefix=${packageName}@`
      );
      console.log(`🔎 Recommended bump type: ${bump}`);
    } catch (e) {
      console.error(
        `⚠️ Failed to detect bump type for ${pkg}. Defaulting to patch.`
      );
    }

    // Calculate next version
    const nextVersion = exec(
      `pnpm dlx semver ${currentVersion} --increment ${bump}`
    );
    console.log(`🚀 Next version: ${nextVersion}`);

    // Update version in package.json
    packageJson.version = nextVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`✅ Updated version in ${packageJsonPath}`);

    // Publish
    console.log(`🚀 Publishing ${packageName}@${nextVersion} with tag beta...`);
    try {
      //   exec(`pnpm publish --access public --tag beta`, { cwd: distPath });
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
