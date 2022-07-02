import { forwardRef } from 'react';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import theme from 'src/style/theme';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => {
    const { enteringScreen } = theme.transitions.duration;
    const { timeout, ...otherProps } = props;

    return (
      <Slide
        direction="up"
        ref={ref}
        timeout={{ enter: enteringScreen, exit: enteringScreen }}
        {...otherProps}
      />
    );
  },
);

export default Transition;
