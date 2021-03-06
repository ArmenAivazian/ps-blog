import { useState } from 'react';

import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Logo from 'src/components/Logo';
import RoadMap from 'src/components/RoadMap';
import { useNavigationItems } from 'src/hooks/useNavigationItems';
import { sxContainer } from 'src/style/sxContainer';

import NavigationLink from './components/NavigationLink';
import { useChangeLanguage } from './hooks';
import {
  Container,
  LogoText,
  LogoWrapper,
  Navigation,
  Wrapper,
} from './styled';

const Header = () => {
  const [isActiveRoadMap, setIsActiveRoadMap] = useState(false);

  const trigger = useScrollTrigger();
  const navigationItems = useNavigationItems('header');
  const changeLanguage = useChangeLanguage();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <Wrapper sx={sxContainer}>
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
              onClick={changeLanguage}
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="button"
              onClick={() => setIsActiveRoadMap(true)}
            >
              <MapIcon />
            </IconButton>
          </Container>
        </Wrapper>
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
