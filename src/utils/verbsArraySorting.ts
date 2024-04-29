import { IIrregularVerbData } from 'src/types';

export const verbsArraySorting = (prevVerb: IIrregularVerbData, nextVerb: IIrregularVerbData) => {
  return prevVerb.infinitive.toUpperCase() > nextVerb.infinitive.toUpperCase() ? 1 : -1;
};
