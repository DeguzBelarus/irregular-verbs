import { FC, useState, ChangeEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ExitIcon } from '../../assets/img/exit-icon.svg';
import { ROOT_PATH } from 'src/constants/constants';
import { LearnVerbsWrapper } from './components/LearnVerbsWrapper/LearnVerbsWrapper';
import { IRREGULAR_VERBS_DATA } from '../../irregular-verbs-data';
import { LearnVerbItem } from './components/LearnVerbsWrapper/components/LearnVerbItem/LearnVerbItem';
import { VerbSearchInput } from './components/LearnVerbsWrapper/components/VerbSearchInput/VerbSearchInput';
import styles from './LearnPage.module.scss';

export const LearnPage: FC = () => {
  const verbSearchInputRef = useRef<HTMLInputElement>(null);
  const [verbSearchKey, setVerbSearchKey] = useState('');
  const filteredVerbsData = verbSearchKey
    ? IRREGULAR_VERBS_DATA.filter((verbData) =>
        verbData.infinitive.toUpperCase().startsWith(verbSearchKey.toUpperCase()),
      )
    : IRREGULAR_VERBS_DATA;

  const verbSearchKeyHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setVerbSearchKey(value);
  };
  return (
    <div className={styles.LearnPage}>
      <Link className={styles.mainPageLink} to={ROOT_PATH}>
        <ExitIcon className={styles.exitIcon} />
        <span>RETURN</span>
      </Link>
      <LearnVerbsWrapper
        verbSearchInput={
          <VerbSearchInput
            value={verbSearchKey}
            setValue={verbSearchKeyHandler}
            ref={verbSearchInputRef}
          />
        }
      >
        {filteredVerbsData?.length ? (
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
