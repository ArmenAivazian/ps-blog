import { styled } from '@mui/material/styles';

import { media } from 'src/utils/media';

export const Wrapper = styled('div')`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 55px 15px;
  font-size: 22px;
  line-height: 1.2;
  ${media('tablet')} {
    padding: 72px 20px;
    font-size: 27px;
  }
  ${media('laptop')} {
    padding: 75px 25px;
    font-size: 32px;
  }
`;
