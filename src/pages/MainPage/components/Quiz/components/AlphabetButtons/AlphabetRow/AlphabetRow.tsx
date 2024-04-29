import { FC, memo } from 'react';

import { ReactChildrenType } from 'src/types/types';
import styles from './AlphabetRow.module.scss';

interface Props {
  children?: ReactChildrenType;
}

export const AlphabetRow: FC<Props> = memo(({ children }) => {
  return <div className={styles.AlphabetRow}>{children}</div>;
});
