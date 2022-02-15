import React, { forwardRef, Ref } from 'react';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';
import * as styled from './styles';
import { valueToRatio } from '../../slider/src/utils';

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    negative,
    utility,
    quiet,
    small,
    link,
    pill,
    loading,
    variant,
    ...rest
  } = props;

  const classes = classNames(props.className, {
    button: true,
    // primary buttons
    'button--destructive': negative,
    // quiet
    'button--destructive-flat': negative && quiet,
    'button--utility-flat': utility && quiet,
    // others
    'button--small': small,
    'button--utility': utility && !quiet,
    'button--link': link,
    'button--pill': pill,
    'button--in-progress': loading,
  });

  // children,
  // href,
  // className,
  // target,
  // rel,
  // link,
  // variant,
  // fullWidth,

  return (
    <>
      {props.href ? (
        <styled.Button
          variant={variant}
          href={props.href}
          target={props.target}
          rel={props.target === '_blank' ? props.rel || 'noopener' : undefined}
          ref={ref as Ref<HTMLAnchorElement>}
          as={'a'}
        >
          {props.children}
        </styled.Button>
      ) : (
        <styled.Button
          {...rest}
          variant={variant}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
        >
          {props.children}
        </styled.Button>
      )}
      {props.loading ? (
        <span
          className="sr-only"
          role="progressbar"
          aria-valuenow={0}
          aria-valuetext="Laster..."
        />
      ) : null}
    </>
  );
});
