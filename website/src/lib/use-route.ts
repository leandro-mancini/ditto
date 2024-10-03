import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { FlattenNavItem, NavItem, websiteConfig } from '../website.config';

const join = (...args: Array<string | undefined>) =>
  `/${args.filter(Boolean).join('/')}`;

export function useRoute() {
  const currentUrl = usePathname();

  const [primaryHref, secondaryHref] = currentUrl.split('/').slice(1);
  const flattenedItems = getFlattenedNavItems();

  useLayoutEffect(() => {
    document.querySelectorAll('[aria-current=page]').forEach((el) => {
      el.scrollIntoView({ block: 'center' });
    });
  }, []);

  function getPrimaryNavItems() {
    return websiteConfig.navigation.map((item) => {
      const firstChild = flattenedItems.find((child) =>
        child.url?.startsWith(`/${item.url!}`)
      );
      return {
        title: item.title,
        url: firstChild?.url,
        current: currentUrl.startsWith(`/${item.url}`),
      };
    });
  }

  function getPrimaryNav() {
    return (
      websiteConfig.navigation.find((item) => item.url === primaryHref) || {
        url: '',
        items: [],
      }
    );
  }

  function getSecondaryNav() {
    const primaryNav = getPrimaryNav();
    return primaryNav.items?.find((item) => item.url === secondaryHref) || null;
  }

  function getSecondaryNavItems() {
    const nav = getPrimaryNav();
    return (
      nav.items?.map((item) => {
        const firstChild = flattenedItems.find((child) =>
          child.url?.startsWith(join(nav.url, item.url))
        );
        return {
          title: item.title,
          url: firstChild?.url,
          current: currentUrl.startsWith(join(nav.url, item.url)),
        };
      }) || []
    );
  }

  function getFlattenedNavItems(): FlattenNavItem[] {
    const result: FlattenNavItem[] = [];
    const iterate = (item: NavItem, parentUrl = '') => {
      const url = item.url ? `${parentUrl}/${item.url}` : parentUrl;
      if (item.items) {
        item.items.forEach((child) => iterate(child, url));
      } else {
        result.push({ title: item.title, url, status: item.status });
      }
    };
    websiteConfig.navigation.forEach((item) => iterate(item));
    return result;
  }

  function getCurrentIndex(items: FlattenNavItem[]): number {
    return items.findIndex((item) => currentUrl.startsWith(item.url!));
  }

  function getNextItem(): NavItem | null {
    const items = getFlattenedNavItems();
    const index = getCurrentIndex(items);
    return items[index + 1] || null;
  }

  function getPrevItem(): NavItem | null {
    const items = getFlattenedNavItems();
    const index = getCurrentIndex(items);
    return items[index - 1] || null;
  }

  function getSidebarNavItems() {
    const primaryNav = getPrimaryNav();
    const secondaryNav = getSecondaryNav();

    return (
      secondaryNav?.items?.map((group) => ({
        ...group,
        items:
          group?.items?.map((item) => ({
            status: item.status,
            title: item.title,
            url: item.url?.startsWith('http')
              ? item.url
              : join(primaryNav.url, secondaryNav.url, group.url, item.url),
            current: currentUrl.startsWith(
              join(primaryNav.url, secondaryNav.url, group.url, item.url)
            ),
          })) || [],
      })) || []
    );
  }

  return {
    currentUrl,
    getPrimaryNavItems,
    getSecondaryNavItems,
    getPrimaryNav,
    getSecondaryNav,
    getSidebarNavItems,
    getNextItem,
    getPrevItem,
  };
}
