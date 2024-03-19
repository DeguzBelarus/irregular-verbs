import { FC, memo, useRef } from 'react';

import { classNames } from 'src/helpers/classNames';
import { useAnimate } from './hooks/useAnimate';
import styles from './StartQuizButton.module.scss';

export const StartQuizButton: FC = memo(() => {
  const startQuizButtonRef = useRef<HTMLButtonElement>(null);

  useAnimate(startQuizButtonRef);
  return (
    <button
      type="button"
      className={classNames(styles.StartQuizButton, ['start-quiz-button'])}
      disabled={true}
      ref={startQuizButtonRef}
    >
      START QUIZ
    </button>
  );
});
