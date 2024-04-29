import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { combinedReducer } from './combinedReducer';
import { IS_DEVELOPMENT } from 'src/constants/constants';

export const store = configureStore({
  reducer: combinedReducer,
  devTools: IS_DEVELOPMENT,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
