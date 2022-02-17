import React, { forwardRef, Ref } from 'react';
import type { ButtonProps } from './props';
import * as styled from './styles';

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const { utility, quiet, small, link, pill, loading, variant, fullWidth } =
    props;

  return (
    <>
      {props.href ? (
        <styled.Button
          {...{
            link,
            variant,
            fullWidth,
            small,
            loading,
            quiet,
            utility,
            pill,
          }}
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
          {...{
            link,
            variant,
            fullWidth,
            small,
            loading,
            quiet,
            utility,
            pill,
          }}
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
