import { TFunction } from 'react-i18next';

import { useTranslation } from './useTranslations';

type TypeNavigation = 'header' | 'roadmap';

const GLOBAL_NAV_LIST = [
  { url: 'translation', name: 'translation' },
  { url: 'thought', name: 'thought' },
];

const HEADER_LIST = [...GLOBAL_NAV_LIST];

const ROADMAP_LIST = [...GLOBAL_NAV_LIST];

function getNavigationList(
  list: { name: string; url: string }[],
  t: TFunction,
) {
  return list.map(({ url, name }) => {
    return { url: `/category/${url}`, name: t(name) };
  });
}

export function useNavigationItems(type: TypeNavigation) {
  const { t } = useTranslation({ keyPrefix: 'navigation' });

  switch (type) {
    case 'header':
      return getNavigationList(HEADER_LIST, t);
    case 'roadmap':
      return getNavigationList(ROADMAP_LIST, t);
  }
}
