import { useState } from 'react';

import MapIcon from '@mui/icons-material/Map';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Logo from 'src/components/Logo';
import RoadMap from 'src/components/RoadMap';
import { useNavigationItems } from 'src/hooks/useNavigationItems';
import { sxContainer } from 'src/style/sxContainer';

import NavigationLink from './components/NavigationLink';
import { Container, LogoText, LogoWrapper, Navigation } from './styled';

const Header = () => {
  const [isActiveRoadMap, setIsActiveRoadMap] = useState(false);
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
            <Navigation>
              {navigationItems.map(({ url, name }) => (
                <NavigationLink key={name} href={url}>
                  {name}
                </NavigationLink>
              ))}
            </Navigation>
            <IconButton
              color="inherit"
              component="button"
              onClick={() => setIsActiveRoadMap(true)}
            >
              <MapIcon />
            </IconButton>
          </Container>
        </AppBar>
      </Slide>
      <Box />
      <RoadMap
        active={isActiveRoadMap}
        onClose={() => setIsActiveRoadMap(false)}
      />
    </>
  );
};

export default Header;
