import React, { MouseEventHandler } from 'react';

export interface ButtonProps {
  className?: string;
  color?: string;
  purple?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  outline?: boolean;
  link?: boolean;
  type?: 'submit' | 'button' | 'reset';
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
