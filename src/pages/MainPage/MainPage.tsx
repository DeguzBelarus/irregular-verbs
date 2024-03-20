import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { MainLogo } from './components/MainLogo/MainLogo';
import { StartQuizButton } from './components/StartQuizButton/StartQuizButton';
import { LEARN_PAGE__PATH } from 'src/constants/constants';
import { ReactComponent as BookIcon } from '../../assets/img/book-icon.svg';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div className={styles.MainPage}>
      <Link className={styles.learnPageLink} to={LEARN_PAGE__PATH}>
        <BookIcon className={styles.bookIcon} />
        <span>LEARN</span>
      </Link>
      {!isQuizStarted ? (
        <>
          <MainLogo /> <StartQuizButton />
        </>
      ) : null}
    </div>
  );
};
