import { ChangeEvent, forwardRef, memo } from 'react';

import styles from './VerbSearchInput.module.scss';

interface Props {
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const VerbSearchInput = memo(
  forwardRef<HTMLInputElement, Props>(({ value, setValue }, ref) => {
    return (
      <div className={styles.VerbSearchInput}>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event)}
          placeholder="Search"
          ref={ref}
        />
      </div>
    );
  }),
);
