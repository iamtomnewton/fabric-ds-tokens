import { ButtonProps } from './props';
import styled from 'styled-components';
import { tokens } from '../../tokens';

export const Button = styled.button<ButtonProps>`
  background: ${tokens['button-background']};
  border: ${tokens['button-border']};
  border-radius: ${tokens['button-border-radius']};
  color: ${tokens['button-color']};
  display: ${(props) => (props.fullWidth ? 'block' : 'inline-block')};
  font-family: inherit;
  font-size: ${tokens['button-font-size']};
  font-weight: ${tokens['button-font-weight']};
  line-height: 1.5;
  padding: ${tokens['button-padding']};
  text-decoration: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:hover {
    background: ${tokens['button-background-hover']};
    border: ${tokens['button-border-hover']};
    color: ${tokens['button-color-hover']};
    cursor: pointer;
  }

  ${(props) =>
    props.variant &&
    `
    background: ${tokens[`button-${props.variant}-background`]};
    border: ${tokens[`button-${props.variant}-border`]};
    color: ${tokens[`button-${props.variant}-color`]};

    &:hover {
      background: ${tokens[`button-${props.variant}-background-hover`]};
      border: ${tokens[`button-${props.variant}-border-hover`]};
      color: ${tokens[`button-${props.variant}-color-hover`]};
    }
  `}

  /* Link */

  ${(props) =>
    props.link &&
    `
    background: ${tokens['color-transparent']};
    border: none;
    color: ${tokens['link-color']};
    padding: 0;

    &:hover {
      background: ${tokens['color-transparent']};
      border: none;
      color: ${tokens['link-color']};
      text-decoration: underline;
    }
  `}

  // This doesn't feel bulletproof

  ${(props) =>
    props.link &&
    props.variant &&
    `
    color: ${tokens[`button-${props.variant}-background`]};

    &:hover {
      color: ${tokens[`button-${props.variant}-background`]};
    }
  `}

  /* small */

  ${(props) =>
    props.small &&
    `
    font-size: ${tokens['typography-small-size']};
    padding: 6px 16px;
  `}

  /* Loading */

  ${(props) =>
    props.loading &&
    `
    color: ${tokens['color-greyscale-500']};
    border-color: ${tokens['color-transparent']};
  `}

  /* Quiet */

  ${(props) =>
    props.quiet &&
    `
    border: none;

    &:hover {
      border: none;
    }
  `}

  ${(props) =>
    props.quiet &&
    !props.loading &&
    props.variant === 'warning' &&
    `
    background: ${tokens['color-transparent']};
    color: ${tokens[`button-${props.variant}-background`]};
  `}

    /* Utility */

  ${(props) =>
    props.utility &&
    `
    border-width: 1px;
    color: ${tokens['color-greyscale-500']};

    &:hover {
      border-width: 1px;
    }
  `}
`;
