import React, { FunctionComponent } from 'react';
import { StyledFormField } from './FormField.styles';

interface Props {
  label: string;
  id: string;
  children: React.ReactNode;
  dir?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const FormField: FunctionComponent<Props> = ({ label, id, children, dir = 'column' }) => {
  return (
    <StyledFormField dir={dir}>
      <label htmlFor={id}>{label}</label>
      {children}
    </StyledFormField>
  );
};

export default FormField;
