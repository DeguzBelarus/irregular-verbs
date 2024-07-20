import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { MainLogo } from './components/MainLogo/MainLogo';
import { StartQuizButton } from './components/StartQuizButton/StartQuizButton';
import { LEARN_PAGE__PATH } from 'src/constants/constants';
import { Quiz } from './components/Quiz/Quiz';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const startQuiz = useCallback(() => {
    setIsQuizStarted(true);
  }, []);
  const endQuiz = () => {
    setIsQuizStarted(false);
  };
  return (
    <div className={styles.MainPage}>
      {!isQuizStarted ? (
        <Link className={styles.pageTransferLink} to={LEARN_PAGE__PATH}>
          <span>learn</span>
        </Link>
      ) : (
        <div className={styles.pageTransferLink} onClick={endQuiz}>
          <span>end quiz</span>
        </div>
      )}
      {!isQuizStarted ? (
        <>
          <MainLogo /> <StartQuizButton startQuizFunction={startQuiz} />
        </>
      ) : (
        <Quiz />
      )}
    </div>
  );
};
