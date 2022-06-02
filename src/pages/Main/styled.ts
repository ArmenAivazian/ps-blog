import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .Typist .Cursor {
    display: inline-block;
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
