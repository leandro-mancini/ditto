module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    chore: {
      description:
        'Processo de construção ou alterações de ferramentas auxiliares',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'Alterações relacionadas ao CI',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'A documentação só muda',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'Um novo recurso',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'Uma correção de bug',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'Uma mudança de código que melhora o desempenho',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description:
        'Uma alteração de código que não corrige um bug nem adiciona um recurso',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Criar um commit de lançamento',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description:
        'Marcação, espaço em branco, formatação, ponto e vírgula ausente...',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adicionando testes ausentes',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: 'Selecione o tipo de alteração que você está realizando:',
      customScope: 'Selecione o escopo que este componente afeta:',
      subject: 'Escreva uma breve descrição imperativa do humor da mudança:\n',
      body: 'Forneça uma descrição mais longa da mudança:\n ',
      breaking: 'Liste todas as alterações significativas:\n',
      footer: 'Problemas que este commit fecha, por exemplo #123:',
      confirmCommit: 'Os pacotes que este commit afetou\n',
    },
  },
};
