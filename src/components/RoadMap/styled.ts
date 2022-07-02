import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';

import { media } from 'src/utils/media';

export const Head = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }): string => theme.spacing(0.5)};
  padding-top: ${({ theme }): string => theme.spacing(0.5)};
  ${media('tablet')} {
    padding-bottom: ${({ theme }): string => theme.spacing()};
    padding-top: ${({ theme }): string => theme.spacing()};
  }
`;

export const Title = styled('p')`
  text-transform: lowercase;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 18px;
  line-height: 1;
  margin: 0;
  color: ${({ theme }): string => theme.palette.primary.main};
  ${media('tablet')} {
    font-size: 22px;
  }
  ${media('laptop')} {
    font-size: 24px;
  }
`;

export const Wrapper = styled(DialogContent)`
  text-align: center;
`;

export const Item = styled(Button)`
  max-width: 100%;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
  ${media('tablet')} {
    font-size: 22px;
    margin-bottom: 20px;
  }
  ${media('laptop')} {
    font-size: 26px;
    margin-bottom: 25px;
  }
` as typeof Button;
