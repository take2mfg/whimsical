import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { darken, lighten } from 'polished';

import { marginHandler } from '../styles/marginHandler';

import { COLORS } from './colors';

// function textColor(color: string) {
//   if (color === 'white' || 'smoke' || 'yellow') {
//     return COLORS.black;
//   } else {
//     return COLORS.white;
//   }
// }

function _Button({
  className,
  color,
  purple,
  sm,
  md,
  lg,
  outline,
  link,
  type = 'submit',
  style,
  disabled,
  children,
  onClick,
}: any): JSX.Element {
  return (
    <React.Fragment>
      <button
        type={type}
        className={clsx(
          className,
          purple && 'purple',
          sm && 'sm',
          md && 'md',
          lg && 'lg',
          outline && 'outline',
          link && 'link'
        )}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        {children instanceof Array && children.map
          ? children.map((child, i) => {
              if (typeof child === 'string') {
                return <span key={i}>{child}</span>;
              }
              return child;
            })
          : children}
      </button>
    </React.Fragment>
  );
}

const Button = styled(_Button)`
  outline: none;
  background-color: ${COLORS.white};
  background-image: linear-gradient(
    -180deg,
    rgba(238, 244, 246, 0.85),
    #eef4f6
  );
  font-size: 16px;
  padding: 0 1em;
  margin: 0;
  color: ${COLORS.black};
  font-weight: 600;9
  height: 36px;
  border-radius: 4px;
  -webkit-user-select: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${COLORS.black} !important;
    background-color: ${darken(0.05, COLORS.black)};
  }

  &.outline {
    background-color: transparent;
    color: ${COLORS.black};
    border: solid 1px ${COLORS.black};

    &:hover {
      color: ${COLORS.black} !important;
      background-color: ${lighten(0.125, COLORS.black)};
    }
  }

  &:disabled {
    opacity: 0.4;
  }

  &.link {
    background: transparent;
    color: ${COLORS.black} !important;

    &:hover {
      color: ${COLORS.black} !important;
      text-decoration: underline;
    }
  }

  > svg:first-child {
    margin-right: 0.7em;
  }

  > svg:last-child {
    margin-left: 0.7em;
  }

  > svg:only-child {
    margin: 0;
  }

  &.purple {
    color: ${COLORS.white};
    background-color: ${COLORS.purple};
    background-image: none;
    border: none;

    &:hover {
      color: ${COLORS.white} !important;
      background-color: ${darken(0.05, COLORS.purple)};
    }

    &.outline {
      background-color: transparent;
      color: ${COLORS.purple};
      border: solid 1px ${COLORS.purple};

      &:hover {
        color: ${COLORS.purple} !important;
        background-color: ${darken(0.125, COLORS.white)};
      }
    }

    &.link {
      background: transparent;
      color: ${COLORS.purple} !important;

      &:hover {
        color: ${COLORS.purple} !important;
        text-decoration: underline;
      }
    }
  }

  &.sm {
    height: 26px;
    font-size: 13px;
  }

  &.md {
    height: 38px;
    font-size: 16px;
  }

  &.lg {
    height: 50px;
    font-size: 20px;
  }

  ${(props) => marginHandler(props)}
`;

export default Button;
