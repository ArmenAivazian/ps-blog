import { useTranslation } from 'react-i18next';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Logo from 'src/components/Logo';
import { sxContainer } from 'src/style/sxContainer';

import NavigationLink from './components/NavigationLink';
import { PAGES } from './constants';
import { Container, LogoText, LogoWrapper } from './styled';

const Header = () => {
  const trigger = useScrollTrigger();
  const { t } = useTranslation('', { keyPrefix: 'navigation' });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar sx={sxContainer}>
          <Container>
            <LogoWrapper to="/">
              <Logo />
              <LogoText>Blog</LogoText>
            </LogoWrapper>
            <Box sx={{ display: 'flex' }}>
              {PAGES.map(({ name, href }) => (
                <NavigationLink key={name} href={href}>
                  {t(name)}
                </NavigationLink>
              ))}
            </Box>
          </Container>
        </AppBar>
      </Slide>
      <Box />
    </>
  );
};

export default Header;
