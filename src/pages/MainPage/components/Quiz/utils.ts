import { IIrregularVerbData } from '../../types';

export const shuffleArray = (array: Array<IIrregularVerbData>) => {
  if (!Array.isArray(array)) throw new TypeError('The argument array must be an array');
  const arrayLength = array.length;
  if (arrayLength < 2) return array;
  const submittedIndexes: Array<number> = [];
  const shuffledArray: Array<IIrregularVerbData> = [];
  const generateIndex = () => {
    const generateRandomIndex = () => Math.round(Math.random() * arrayLength);
    let index = generateRandomIndex();
    while (submittedIndexes.includes(index)) {
      index = generateRandomIndex();
    }
    submittedIndexes.push(index);
    return index;
  };
  array.forEach((value) => {
    shuffledArray[generateIndex()] = value;
  });
  return shuffledArray;
};
