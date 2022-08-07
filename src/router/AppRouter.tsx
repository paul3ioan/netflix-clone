import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { homePage } from './constants';
import Home from '../modules/home';

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePage} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RootRouter;
