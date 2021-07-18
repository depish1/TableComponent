import React, { FunctionComponent } from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  text: string;
  color: string;
  handler?: () => void;
}

const Button: FunctionComponent<Props> = ({ text, handler, color }) => {
  return (
    <StyledButton color={color} onClick={handler}>
      {text}
    </StyledButton>
  );
};

export default Button;
