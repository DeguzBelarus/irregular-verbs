import { FC, memo, useRef } from 'react';

import styles from './QuizProgress.module.scss';
import { useAnimate } from './hooks/useAnimate';

export const QuizProgress: FC = memo(() => {
  const quizProgressRef = useRef<HTMLDivElement>(null);
  useAnimate(quizProgressRef);
  return <div className={styles.QuizProgress} ref={quizProgressRef}></div>;
});
