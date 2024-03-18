type ClassModificatorsType = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  additionalClasses: Array<string> = [],
  dynamicalClasses: ClassModificatorsType = {},
): string => {
  const classModifications = Object.entries(dynamicalClasses)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);
  return [mainClass, ...additionalClasses, ...classModifications].join(' ');
};
