import { FC } from 'react';

import { COPYRIGHT_DATA } from './copyright-data';
import styles from './CopyrightText.module.scss';

export const CopyrightText: FC = () => {
  return <div className={styles.CopyrightText}>{COPYRIGHT_DATA}</div>;
};
