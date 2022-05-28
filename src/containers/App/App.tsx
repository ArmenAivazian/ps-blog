import { Route, Routes } from 'react-router-dom';

import Header from 'src/components/_main/Header';
import Main from 'src/pages/Main';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
