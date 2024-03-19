import { FC, useState } from 'react';

import { MainLogo } from './components/MainLogo/MainLogo';
import { StartQuizButton } from './components/StartQuizButton/StartQuizButton';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div className={styles.MainPage}>
      {!isQuizStarted ? (
        <>
          <MainLogo /> <StartQuizButton />
        </>
      ) : null}
    </div>
  );
};
