import React, { forwardRef, Ref } from 'react';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';
import * as styled from './styles';

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    primary,
    secondary,
    negative,
    utility,
    quiet,
    small,
    link,
    pill,
    loading,
    ...rest
  } = props;

  const classes = classNames(props.className, {
    button: true,
    // primary buttons
    'button--primary': primary,
    'button--destructive': negative,
    // quiet
    'button--flat': secondary && quiet,
    'button--destructive-flat': negative && quiet,
    'button--utility-flat': utility && quiet,
    // others
    'button--small': small,
    'button--utility': utility && !quiet,
    'button--link': link,
    'button--pill': pill,
    'button--in-progress': loading,
  });

  return (
    <>
      {props.href ? (
        <a
          href={props.href}
          target={props.target}
          rel={props.target === '_blank' ? props.rel || 'noopener' : undefined}
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
        >
          {props.children}
        </a>
      ) : (
        <styled.Button
          {...rest}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
          className={classes}
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
