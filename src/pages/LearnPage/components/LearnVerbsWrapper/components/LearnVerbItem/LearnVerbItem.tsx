import { FC, memo } from 'react';

import { IIrregularVerbData } from 'src/types';
import { COMMA_WITH_SPACE } from 'src/constants/constants';
import styles from './LearnVerbItem.module.scss';

export const LearnVerbItem: FC<IIrregularVerbData> = memo(
  ({ infinitive, pastParticiple, pastSimple, translation, isPastSimpleAndParticipleEqual }) => {
    const translationString = translation.join(COMMA_WITH_SPACE);
    const pastSimpleString = pastSimple.join(COMMA_WITH_SPACE);
    const pastParticipleString = pastParticiple.join(COMMA_WITH_SPACE);
    return (
      <div className={styles.LearnVerbItem}>
        <p className={styles.infinitiveAndTranslationParagraph}>
          <span className={styles.infinitiveSpan}>{infinitive}</span>
          <span className={styles.translationSpan}>{translationString}</span>
        </p>
        <div className={styles.rulesContainer}>
          {!isPastSimpleAndParticipleEqual ? (
            <>
              <div className={styles.ruleContainer}>
                <span className={styles.ruleTypeSpan}>Past Simple</span>
                <span className={styles.ruleContentSpan}>{pastSimpleString}</span>
              </div>
              <div className={styles.ruleContainer}>
                <span className={styles.ruleTypeSpan}>Past Participle</span>
                <span className={styles.ruleContentSpan}>{pastParticipleString}</span>
              </div>
            </>
          ) : (
            <div className={styles.ruleContainer}>
              <span className={styles.ruleTypeSpan}>Past Simple + Past Participle</span>
                <span className={styles.ruleContentSpan}>{pastParticipleString}</span>
            </div>
          )}
        </div>
      </div>
    );
  },
);
