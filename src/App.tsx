import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Header from './components/_global/Header';

export default function App() {
  return (
    <>
      <Header />
      <Container sx={{ height: 2000, mt: 12 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example with TypeScript
          </Typography>
        </Box>
      </Container>
    </>
  );
}
