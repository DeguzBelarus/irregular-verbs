import { FC, memo } from 'react';

import { IRREGULAR_VERBS_DATA } from '../../../../irregular-verbs-data';
import { shuffleArray } from './utils';
import { QuizProgress } from './components/QuizProgress/QuizProgress';
import { AlphabetButtons } from './components/AlphabetButtons/AlphabetButtons';
import { GuessVerb } from './components/GuessVerb/GuessVerb';
import styles from './Quiz.module.scss';

export const Quiz: FC = memo(() => {
  const shuffledIrregularVerbsArray = shuffleArray(IRREGULAR_VERBS_DATA);
  return (
    <div className={styles.Quiz}>
      <GuessVerb />
      <QuizProgress />
      <AlphabetButtons />
    </div>
  );
});
