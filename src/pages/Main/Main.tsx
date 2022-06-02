import { useState } from 'react';
import Typist from 'react-typist';

import { Wrapper } from './styled';

const Main = () => {
  const [indicator, setIndicator] = useState(false);

  function handleEndTyping() {
    console.log(indicator);
    setIndicator(!indicator);
  }

  return (
    <Wrapper sx={{ height: 2000, pt: 50 }}>
      <Typist onTypingDone={handleEndTyping}>
        First Sentence
        <Typist.Delay ms={500} />
        <Typist.Backspace count={8} delay={200} />
        This won't be animated until 500ms after the first sentenced is rendered
      </Typist>
    </Wrapper>
  );
};

export default Main;
