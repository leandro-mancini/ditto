module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer', // analisa commits com base nos padrões convencionais
    '@semantic-release/release-notes-generator', // gera release notes
    '@semantic-release/changelog', // atualiza o CHANGELOG.md
    '@semantic-release/npm', // atualiza versão no package.json e publica no npm
    '@semantic-release/git', // commit das mudanças (CHANGELOG, package.json, etc)
  ],
};
