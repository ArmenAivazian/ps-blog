import { useTranslation as useBaseTranslation } from 'react-i18next';

interface Props {
  keyPrefix?: string;
}
export function useTranslation({ keyPrefix }: Props) {
  return useBaseTranslation(undefined, { keyPrefix });
}
