import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Logo from 'src/components/Logo';
import { useNavigationItems } from 'src/hooks/useNavigationItems';
import { sxContainer } from 'src/style/sxContainer';

import NavigationLink from './components/NavigationLink';
import { Container, LogoText, LogoWrapper } from './styled';

const Header = () => {
  const trigger = useScrollTrigger();
  const navigationItems = useNavigationItems('header');

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
              {navigationItems.map(({ url, name }) => (
                <NavigationLink key={name} href={url}>
                  {name}
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
