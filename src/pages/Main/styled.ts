import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

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

export const ZoomStyle = styled(Zoom)`
  transition-delay: ${({ theme }): string =>
    `${theme.transitions.duration.leavingScreen}ms`};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 30px;
  max-width: max-content;
`;

export const RoadButton = styled(Button)`
  font-weight: 600;
  padding-left: ${({ theme }): string => theme.spacing(4)};
`;
