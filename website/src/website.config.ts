export const websiteConfig: WebsiteConfig = {
  copyright: 'Copyright © {{date}} Ditto. Todos os direitos reservados.',
  title: 'Ditto',
  titleTemplate: '%s | Ditto',
  description: 'Crie aplicativos escaláveis ​​e acessíveis com facilidade.',
  url: 'https://mancinidev.me',
  repoUrl: 'https://github.com/leandro-mancini',
  navigation: [{ title: 'Docs', url: 'docs' }],
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

export interface FlattenNavItem extends Omit<NavItem, 'items'> {}
