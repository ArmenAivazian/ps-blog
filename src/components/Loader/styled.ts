import { styled } from '@mui/material/styles';

import { HEADER_HEIGHT } from 'src/constants/header';

import { StyledContainerProps } from './types';

function getMinHeight(isForPage: boolean) {
  return isForPage
    ? {
        minHeight: `calc(100vh - ${HEADER_HEIGHT.laptop}px)`,
      }
    : {};
}

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isForPage',
})<StyledContainerProps>(({ isForPage, theme }) => ({
  maxWidth: '100%',
  width: '100%',
  maxHeight: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  ...getMinHeight(isForPage),
}));
