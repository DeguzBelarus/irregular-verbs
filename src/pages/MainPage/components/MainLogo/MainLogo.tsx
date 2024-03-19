import { FC, memo, useRef } from 'react';

import { useAnimate } from './hooks/useAnimate';
import { MainLogoLetters } from './components/MainLogoLetters/MainLogoLetters';
import styles from './MainLogo.module.scss';

export const MainLogo: FC = memo(() => {
  const mainLogoRef = useRef<HTMLDivElement>(null);
  useAnimate(mainLogoRef);
  return (
    <div className={styles.MainLogo} ref={mainLogoRef}>
      <MainLogoLetters />
    </div>
  );
});
