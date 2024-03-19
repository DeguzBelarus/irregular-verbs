import { FC } from 'react';

import { useRoutes } from 'src/hooks/useRoutes';
import { CopyrightText } from './CopyrightText/CopyrightText';

export const App: FC = () => {
  const routes = useRoutes();
  return (
    <>
      {routes}
      <CopyrightText />
    </>
  );
};
