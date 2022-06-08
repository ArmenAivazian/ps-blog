import { useTranslation } from 'react-i18next';
import Typed from 'react-typed';

import {
  BACK_DELAY,
  BACK_SPEED,
  SMART_BACKSPACE,
  START_DELAY,
  TYPE_SPEED,
} from './constants';
import { Wrapper } from './styled';

const Main = () => {
  const { t } = useTranslation();

  const text = [];
  const amount = +t('welcomeText.amount');
  for (let i = 1; i <= amount; i++) text.push(t(`welcomeText.${i}`));

  return (
    <Wrapper>
      <Typed
        strings={text}
        typeSpeed={TYPE_SPEED}
        startDelay={START_DELAY}
        backSpeed={BACK_SPEED}
        smartBackspace={SMART_BACKSPACE}
        backDelay={BACK_DELAY}
        loop
      />
    </Wrapper>
  );
};

export default Main;
