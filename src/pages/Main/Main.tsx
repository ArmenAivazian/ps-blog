import { useState } from 'react';
import Typed from 'react-typed';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import RoadMap from 'src/components/RoadMap';
import { useTranslation } from 'src/hooks/useTranslations';
import theme from 'src/style/theme';

import {
  BACK_DELAY,
  BACK_SPEED,
  SMART_BACKSPACE,
  START_DELAY,
  TYPE_SPEED,
} from './constants';
import { RoadButton, Wrapper, ZoomStyle } from './styled';

const Main = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isActiveRoadMap, setIsActiveRoadMap] = useState(false);

  const { t } = useTranslation({});

  const text = [];
  const amount = +t('welcomeText.amount');
  for (let i = 1; i <= amount; i++) text.push(t(`welcomeText.${i}`));
  const { complex } = theme.transitions.duration;

  return (
    <>
      <Wrapper>
        <Typed
          strings={text}
          typeSpeed={TYPE_SPEED}
          startDelay={START_DELAY}
          backSpeed={BACK_SPEED}
          smartBackspace={SMART_BACKSPACE}
          backDelay={BACK_DELAY}
          onComplete={() => setIsTypingDone(true)}
          loop
        />
      </Wrapper>
      <ZoomStyle in={isTypingDone} timeout={{ enter: complex }} unmountOnExit>
        <RoadButton
          variant="contained"
          onClick={() => setIsActiveRoadMap(true)}
        >
          {t('navigation.roadMap')}
          <KeyboardArrowDownIcon sx={{ ml: 1 }} />
        </RoadButton>
      </ZoomStyle>
      <RoadMap
        active={isActiveRoadMap}
        onClose={() => setIsActiveRoadMap(false)}
      />
    </>
  );
};

export default Main;
