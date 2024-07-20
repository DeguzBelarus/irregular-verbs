import { ProjectModeType } from 'src/types/types';
import { isDevelopmentChecker } from 'src/utils/isDevelopmentChecker';

export const IS_DESKTOP = !navigator.maxTouchPoints;
export const ROOT_PATH = '/';
export const LEARN_PAGE__PATH = '/learn';
export const COMMA_WITH_SPACE = ', ';
export const EMPTY_STRING = '';
export const IS_DEVELOPMENT = isDevelopmentChecker(
  (process.env.NODE_ENV as ProjectModeType) || 'development',
);
