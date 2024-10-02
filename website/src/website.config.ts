export const websiteConfig: WebsiteConfig = {
  copyright: 'Copyright © {{date}} Mancini Dev. Todos os direitos reservados.',
  title: 'Mancini Dev',
  titleTemplate: '%s | Mancini Dev',
  description:
    'Um engenheiro de software interessado em Frontend, Design System, DX, DevOps e infraestrutura como código.',
  url: 'https://mancinidev.me',
  repoUrl: 'https://github.com/leandro-mancini',
  navigation: [
    { title: 'Categorias', url: 'categories' },
    { title: 'Artigos', url: 'posts' },
  ],
};

interface WebsiteConfig {
  title: string;
  titleTemplate: string;
  description: string;
  copyright: string;
  url: string;
  repoUrl: string;
  navigation: NavItem[];
}

export interface NavItem {
  title: string;
  url?: string;
  status?: string;
  items?: NavItem[];
}
