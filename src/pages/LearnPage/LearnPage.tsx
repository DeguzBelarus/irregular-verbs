import { FC, useState, ChangeEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import { EMPTY_STRING, ROOT_PATH } from 'src/constants/constants';
import { LearnVerbsWrapper } from './components/LearnVerbsWrapper/LearnVerbsWrapper';
import { IRREGULAR_VERBS_DATA } from '../../irregular-verbs-data';
import { LearnVerbItem } from './components/LearnVerbsWrapper/components/LearnVerbItem/LearnVerbItem';
import { VerbSearchInput } from './components/LearnVerbsWrapper/components/VerbSearchInput/VerbSearchInput';
import styles from './LearnPage.module.scss';

export const LearnPage: FC = () => {
  const verbSearchInputRef = useRef<HTMLInputElement>(null);
  const [verbSearchKey, setVerbSearchKey] = useState(EMPTY_STRING);

  const filteredVerbsData = verbSearchKey
    ? IRREGULAR_VERBS_DATA.filter((verbData) =>
        verbData.infinitive.toUpperCase().startsWith(verbSearchKey.toUpperCase()),
      )
    : IRREGULAR_VERBS_DATA;
  const isIrregularVerbsFound = Boolean(filteredVerbsData?.length);
  const verbSearchKeyHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setVerbSearchKey(value);
  };
  return (
    <div className={styles.LearnPage}>
      <Link className={styles.pageTransferLink} to={ROOT_PATH}>
        <span>return to main</span>
      </Link>
      <LearnVerbsWrapper
        isIrregularVerbsFound={isIrregularVerbsFound}
        verbSearchInput={
          <VerbSearchInput
            value={verbSearchKey}
            setValue={verbSearchKeyHandler}
            ref={verbSearchInputRef}
          />
        }
      >
        {isIrregularVerbsFound ? (
          filteredVerbsData.map((verbData, index) => {
            return <LearnVerbItem {...verbData} key={index} />;
          })
        ) : (
          <p className={styles.nothingFoundParagraph}>Nothing was found ;(</p>
        )}
      </LearnVerbsWrapper>
    </div>
  );
};
