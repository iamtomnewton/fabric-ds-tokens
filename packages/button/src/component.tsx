import React, { forwardRef, Ref } from 'react';
import type { ButtonProps } from './props';
import * as styled from './styles';

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const { utility, quiet, small, link, pill, loading, variant, fullWidth } =
    props;

  // const classes = classNames(props.className, {
  //   button: true,
  //   // primary buttons
  //   //'button--destructive': negative,
  //   // quiet
  //   //'button--destructive-flat': negative && quiet,
  //   //'button--utility-flat': utility && quiet,
  //   // others
  //   //'button--small': small,
  //   //'button--utility': utility && !quiet,
  //   //'button--link': link,
  //   //'button--pill': pill,
  //   'button--in-progress': loading,
  // });

  return (
    <>
      {props.href ? (
        <styled.Button
          variant={props.variant}
          href={props.href}
          target={props.target}
          rel={props.target === '_blank' ? props.rel || 'noopener' : undefined}
          ref={ref as Ref<HTMLAnchorElement>}
          as={'a'}
          className={props.className}
        >
          {props.children}
        </styled.Button>
      ) : (
        <styled.Button
          {...{ link, variant, fullWidth, small, loading }}
          variant={props.variant}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
          className={`${props.className} ${
            props.loading && `button--in-progress`
          }`}
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
