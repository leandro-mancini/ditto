const sidebarsStyling = {
  stylingSidebar: [
    {
      type: 'category',
      label: 'Guia de Estilos',
      items: [
        {
          type: 'doc',
          id: 'overview', // ID do documento
          label: 'Visão Geral', // Label customizado
        },
      ],
    },
    {
      type: 'category',
      label: 'Composições',
      items: [
        {
          type: 'doc',
          id: 'compositions/animation-styles',
          label: 'Estilos de Animação',
        },
        {
          type: 'doc',
          id: 'compositions/focus-ring',
          label: 'Anel de Foco',
        },
        {
          type: 'doc',
          id: 'compositions/layer-styles',
          label: 'Estilos de Camada',
        },
        {
          type: 'doc',
          id: 'compositions/text-styles',
          label: 'Estilos de Texto',
        },
      ],
    },
    {
      type: 'category',
      label: 'Conceitos Avançados',
      items: [
        {
          type: 'doc',
          id: 'concepts/cascade-layers',
          label: 'Camadas em Cascata',
        },
        {
          type: 'doc',
          id: 'concepts/color-opacity-modifier',
          label: 'Modificador de Opacidade de Cor',
        },
        {
          type: 'doc',
          id: 'concepts/conditional-styles',
          label: 'Estilos Condicionais',
        },
        {
          type: 'doc',
          id: 'concepts/css-variables',
          label: 'Variáveis CSS',
        },
        {
          type: 'doc',
          id: 'concepts/dark-mode',
          label: 'Modo Escuro',
        },
        {
          type: 'doc',
          id: 'concepts/responsive-design',
          label: 'Design Responsivo',
        },
        {
          type: 'doc',
          id: 'concepts/factory',
          label: 'Fábrica de Estilos',
        },
      ],
    },
    {
      type: 'category',
      label: 'Propriedades de Estilo',
      items: [
        {
          type: 'doc',
          id: 'style-props/background',
          label: 'Background',
        },
        {
          type: 'doc',
          id: 'style-props/border',
          label: 'Border',
        },
        {
          type: 'doc',
          id: 'style-props/display',
          label: 'Display',
        },
        {
          type: 'doc',
          id: 'style-props/flex-and-grid',
          label: 'Flex e Grid',
        },
        {
          type: 'doc',
          id: 'style-props/layout',
          label: 'Layout',
        },
        {
          type: 'doc',
          id: 'style-props/sizing',
          label: 'Dimensionamento',
        },
        {
          type: 'doc',
          id: 'style-props/spacing',
          label: 'Espaçamento',
        },
        {
          type: 'doc',
          id: 'style-props/typography',
          label: 'Tipografia',
        },
      ],
    },
  ],
};

module.exports = sidebarsStyling;
