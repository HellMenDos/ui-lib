import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { variant, space, SpaceProps } from 'styled-system';

export interface IProps extends SpaceProps, ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export type ButtonV2Props = IProps & SpaceProps

const ButtonStyles = css<IProps>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  ${variant({
    prop: 'variant',
    variants: {
      primary: {
        bg: '#008cba',
        color: '#fff',
      },
      secondary: {
        bg: 'transparent',
        border: '2px solid #008cba',
        color: '#008cba',
      }
    },
  })}
  ${space}
`;

export const ButtonV2: React.FC<ButtonV2Props> = ({ children, disabled, isLoading, ...props }) => {
    return (
        <StyledButton disabled={disabled || isLoading } {...props}>
            {isLoading ? 'Loading...' : children}
        </StyledButton>
    );
};

const StyledButton = styled.button<IProps>`
  ${ButtonStyles}
  ${props =>
    props.disabled &&
    css`
      cursor: progress;
      opacity: 0.5;
    `}
`;
