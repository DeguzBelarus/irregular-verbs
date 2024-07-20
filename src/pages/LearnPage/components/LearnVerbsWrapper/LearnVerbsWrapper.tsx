import { FC, ReactNode, memo } from 'react';

import { ReactChildrenType } from 'src/types/types';
import { classNames } from 'src/helpers/classNames';
import styles from './LearnVerbsWrapper.module.scss';

interface Props {
  verbSearchInput: ReactNode;
  isIrregularVerbsFound: boolean;
  children?: ReactChildrenType;
}

export const LearnVerbsWrapper: FC<Props> = memo(
  ({ children, verbSearchInput, isIrregularVerbsFound }) => {
    return (
      <div className={styles.LearnVerbsWrapper}>
        <div className={styles.searchInputWrapper}>{verbSearchInput}</div>
        <div
          className={classNames(styles.learnVerbsContainer, [], {
            [styles['no-verbs-found']]: !isIrregularVerbsFound,
          })}
        >
          {children}
        </div>
      </div>
    );
  },
);
