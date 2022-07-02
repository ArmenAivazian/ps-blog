/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { media } from 'src/utils/media';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  padding: ${({ theme }): string => theme.spacing(1)} 0;
  ${media('tablet')} {
    padding: ${({ theme }): string => theme.spacing(2)} 0;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: inherit;
  text-decoration: none;
  margin-right: auto;
`;

export const LogoText = styled(Typography)`
  font-size: 21px;
  margin-left: ${({ theme }): string => theme.spacing(1)};
  font-weight: 700;
  letter-spacing: -0.05rem;
`;
