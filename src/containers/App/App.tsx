import { Route, Routes } from 'react-router-dom';

import Header from 'src/components/_main/Header';
import Category from 'src/pages/Category';
import Main from 'src/pages/Main';

import { Die } from './styled';

const App = () => {
  return (
    <>
      <Header />
      <Die />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
