import { styled } from '@mui/material/styles';

import { HEADER_HEIGHT } from 'src/constants/header';
import { media } from 'src/utils/media';

export const Die = styled('div')`
  height: ${HEADER_HEIGHT.mobile}px;
  ${media('tablet')} {
    height: ${HEADER_HEIGHT.tablet}px;
  }
  ${media('laptop')} {
    height: ${HEADER_HEIGHT.laptop}px;
  }
`;
