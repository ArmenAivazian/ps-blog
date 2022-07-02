import { useTranslation } from 'src/hooks/useTranslations';

export function useChangeLanguage() {
  const { i18n } = useTranslation({});

  if (i18n.language !== 'uk') return () => i18n.changeLanguage('uk');

  return () => i18n.changeLanguage('en');
}
