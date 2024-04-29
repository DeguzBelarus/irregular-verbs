import { ProjectModeType } from 'src/types/types';

export const isDevelopmentChecker = (mode?: ProjectModeType): boolean => {
  return !mode ? true : mode === 'development';
};
