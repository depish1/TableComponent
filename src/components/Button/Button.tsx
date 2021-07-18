import React, { FunctionComponent } from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  text: string;
  color: string;
  handler?: () => void;
  type?: 'submit' | 'button' | 'reset';
}

const Button: FunctionComponent<Props> = ({ text, handler, color, type = 'button' }) => {
  return (
    <StyledButton type={type} color={color} onClick={handler}>
      {text}
    </StyledButton>
  );
};

export default Button;
