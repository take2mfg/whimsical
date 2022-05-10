import { MouseEventHandler } from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
