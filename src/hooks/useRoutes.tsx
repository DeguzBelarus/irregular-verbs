import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from 'src/pages/MainPage/MainPage';
import { LearnPage } from 'src/pages/LearnPage/LearnPage';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/learn" element={<LearnPage />}></Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};
