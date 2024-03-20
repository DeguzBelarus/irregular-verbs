import { FC, ReactNode, memo } from 'react';

import { ReactChildrenType } from 'src/types/types';
import styles from './LearnVerbsWrapper.module.scss';

interface Props {
  verbSearchInput: ReactNode;
  children?: ReactChildrenType;
}

export const LearnVerbsWrapper: FC<Props> = memo(({ children, verbSearchInput }) => {
  return (
    <div className={styles.LearnVerbsWrapper}>
      <div className={styles.searchInputWrapper}>{verbSearchInput}</div>
      <div className={styles.learnVerbsContainer}>{children}</div>
    </div>
  );
});
