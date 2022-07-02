/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { media } from 'src/utils/media';

export const Wrapper = styled(AppBar)`
  background-color: ${({ theme }): string => theme.palette.secondary.main};
  box-shadow: ${({ theme }): string => theme.shadows[1]};
`;

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
  color: ${({ theme }): string => theme.palette.text.secondary};
`;

export const Navigation = styled('div')`
  display: none;
  margin-right: ${({ theme }): string => theme.spacing(1)};
  ${media('tablet')} {
    display: flex;
  }
`;
