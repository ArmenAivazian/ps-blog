import CircularProgress from '@mui/material/CircularProgress';

import { Container } from './styled';
import { LoaderProps } from './types';

const Loader = ({ type }: LoaderProps) => {
  return (
    <Container isForPage={type === 'page'}>
      <CircularProgress />
    </Container>
  );
};

export default Loader;
