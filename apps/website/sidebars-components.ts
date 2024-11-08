const conceptSidebar = [
  {
    type: 'category',
    label: 'Conceitos',
    items: [
      {
        type: 'doc',
        id: 'overview',
        label: 'Visão Geral',
      },
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
];

const componentsSidebar = [
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
        id: 'layout/simple-grid',
        label: 'SimpleGrid',
      },
      {
        type: 'doc',
        id: 'layout/stack',
        label: 'Stack',
      },
    ],
  },
];

const utilitiesSidebar = [
  {
    type: 'category',
    label: 'Utilitários',
    items: [
      {
        type: 'doc',
        id: 'utilities/for',
        label: 'For',
      },
      {
        type: 'doc',
        id: 'utilities/format-number',
        label: 'Format Number',
      },
      {
        type: 'doc',
        id: 'utilities/locale-provider',
        label: 'Locale Provider',
      },
      {
        type: 'doc',
        id: 'utilities/portal',
        label: 'Portal',
      },
      {
        type: 'doc',
        id: 'utilities/show',
        label: 'Show',
      },
    ],
  },
];

const sidebarsComponents = {
  sidebar: [...conceptSidebar, ...componentsSidebar, ...utilitiesSidebar],
};

export default sidebarsComponents;
