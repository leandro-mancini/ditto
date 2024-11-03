const sidebarsComponents = {
  conceptSidebar: [
    {
      type: 'category',
      label: 'Conceitos',
      items: [
        {
          type: 'doc',
          id: 'overview',
          label: 'Visão Geral',
        },
      ],
    },
    {
      type: 'category',
      label: 'Conceitos',
      items: [
        {
          type: 'doc',
          id: 'concepts/composition',
          label: 'Composição',
        },
        {
          type: 'doc',
          id: 'concepts/animation',
          label: 'Animação',
        },
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        {
          type: 'doc',
          id: 'layout/aspect-ratio',
          label: 'Aspect Ratio',
        },
        {
          type: 'doc',
          id: 'layout/box',
          label: 'Box',
        },
        {
          type: 'doc',
          id: 'layout/center',
          label: 'Center',
        },
        {
          type: 'doc',
          id: 'layout/container',
          label: 'Container',
        },
        {
          type: 'doc',
          id: 'layout/flex',
          label: 'Flex',
        },
        {
          type: 'doc',
          id: 'layout/grid',
          label: 'Grid',
        },
        {
          type: 'doc',
          id: 'layout/stack',
          label: 'Stack',
        },
      ],
    },
  ],
};

module.exports = sidebarsComponents;
