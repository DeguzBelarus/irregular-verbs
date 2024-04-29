import { FC, memo } from 'react';

import styles from './GuessVerb.module.scss';

export const GuessVerb: FC = memo(() => {
  return <div className={styles.GuessVerb}>guess verb component</div>;
});
