import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ExitIcon } from '../../assets/img/exit-icon.svg';
import { ROOT_PATH } from 'src/constants/constants';
import styles from './LearnPage.module.scss';

export const LearnPage: FC = () => {
  return (
    <div className={styles.LearnPage}>
      <Link className={styles.mainPageLink} to={ROOT_PATH}>
        <ExitIcon className={styles.exitIcon} />
        RETURN
      </Link>
    </div>
  );
};
