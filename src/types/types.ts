import { ReactNode } from 'react';

export type Nullable<T> = null | T;
export type VoidMethod = () => void;
export type ReactChildrenType = ReactNode | Array<ReactNode>;
export type ProjectModeType = 'development' | 'production';
