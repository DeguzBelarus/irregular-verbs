import { FC, memo } from 'react';

import { AlphabetRow } from './AlphabetRow/AlphabetRow';
import { ALPHABET_DATA } from './alphabet-data';
import styles from './AlphabetButtons.module.scss';

export const AlphabetButtons: FC = memo(() => {
  const firstAlphabetRowLettersData = ALPHABET_DATA.slice(0, 6);
  const secondAlphabetRowLettersData = ALPHABET_DATA.slice(6, 14);
  const thirdAlphabetRowLettersData = ALPHABET_DATA.slice(14, 22);
  const fourthAlphabetRowLettersData = ALPHABET_DATA.slice(22, 26);
  return (
    <div className={styles.AlphabetButtons}>
      <AlphabetRow>
        {firstAlphabetRowLettersData.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </AlphabetRow>
      <AlphabetRow>
        {secondAlphabetRowLettersData.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </AlphabetRow>
      <AlphabetRow>
        {thirdAlphabetRowLettersData.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </AlphabetRow>
      <AlphabetRow>
        {fourthAlphabetRowLettersData.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </AlphabetRow>
    </div>
  );
});
