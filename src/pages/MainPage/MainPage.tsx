import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { MainLogo } from './components/MainLogo/MainLogo';
import { StartQuizButton } from './components/StartQuizButton/StartQuizButton';
import { LEARN_PAGE__PATH } from 'src/constants/constants';
import { ReactComponent as BookIcon } from '../../assets/img/book-icon.svg';
import { ReactComponent as ExitIcon } from '../../assets/img/exit-icon.svg';
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
        <Link className={styles.learnPageLink} to={LEARN_PAGE__PATH}>
          <BookIcon className={styles.bookIcon} />
          <span>LEARN</span>
        </Link>
      ) : (
        <div className={styles.returnToMainButton} onClick={endQuiz}>
          <ExitIcon className={styles.exitIcon} />
          <span>RETURN</span>
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
