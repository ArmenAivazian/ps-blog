import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';

import { useNavigationItems } from 'src/hooks/useNavigationItems';
import { useTranslation } from 'src/hooks/useTranslations';
import { sxContainer } from 'src/style/sxContainer';

import Transition from './components/Transition';
import { Head, Item, Title, Wrapper } from './styled';
import { RadMapProps } from './types';

const RoadMap = ({ active, onClose }: RadMapProps) => {
  const { t } = useTranslation({ keyPrefix: 'navigation' });
  const navigationItems = useNavigationItems('roadmap');

  return (
    <Dialog
      fullScreen
      open={active}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Head sx={sxContainer}>
        <Title>{t('roadMap')}</Title>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Head>
      <Wrapper dividers>
        {navigationItems.map(({ url, name }, index) => (
          <Slide
            key={url}
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Item
              component={Link}
              to={url}
              variant="outlined"
              sx={{
                transitionDelay: `${200 + 100 * (index + 1)}ms !important`,
              }}
            >
              {name}
            </Item>
          </Slide>
        ))}
      </Wrapper>
    </Dialog>
  );
};

export default RoadMap;
