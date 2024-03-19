import { FC, memo } from 'react';

import styles from './MainLogoLetters.module.scss';
import { classNames } from 'src/helpers/classNames';

export const MainLogoLetters: FC = memo(() => {
  return (
    <div className={styles.MainLogoLetters}>
      <span className={classNames(styles.mainLogoCategoryText, ['category-text'])}>
        irregular verbs
      </span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>C</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>R</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>A</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>Z</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>Y</span>
      &nbsp;
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>E</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>N</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>G</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>L</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>I</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>S</span>
      <span className={classNames(styles.mainLogoLetter, ['logo-letter'])}>H</span>
    </div>
  );
});
