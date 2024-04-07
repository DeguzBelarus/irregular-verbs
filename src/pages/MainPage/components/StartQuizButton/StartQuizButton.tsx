import { FC, memo, useRef } from 'react';

import { classNames } from 'src/helpers/classNames';
import { useAnimate } from './hooks/useAnimate';
import styles from './StartQuizButton.module.scss';

interface Props {
  startQuizFunction: VoidFunction;
}

export const StartQuizButton: FC<Props> = memo(({ startQuizFunction }) => {
  const startQuizButtonRef = useRef<HTMLButtonElement>(null);
  useAnimate(startQuizButtonRef);
  return (
    <button
      type="button"
      className={classNames(styles.StartQuizButton, ['start-quiz-button'])}
      onClick={startQuizFunction}
      ref={startQuizButtonRef}
    >
      START QUIZ
    </button>
  );
});
