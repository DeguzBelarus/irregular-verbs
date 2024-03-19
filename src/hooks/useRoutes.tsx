import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from 'src/pages/MainPage/MainPage';
import { LearnPage } from 'src/pages/LearnPage/LearnPage';
import { LEARN_PAGE__PATH, ROOT_PATH } from 'src/constants/constants';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT_PATH} element={<MainPage />}></Route>
      <Route path={LEARN_PAGE__PATH} element={<LearnPage />}></Route>
      <Route path="*" element={<Navigate to={ROOT_PATH} />}></Route>
    </Routes>
  );
};
