import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  transition: ${({ theme }): string =>
    `${theme.transitions.duration.complex}ms`};
`;
