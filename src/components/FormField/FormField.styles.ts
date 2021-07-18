import styled from 'styled-components';

interface Props {
  dir: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const StyledFormField = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => p.dir};
  align-items: ${(p) => (p.dir === 'row' ? 'center' : 'auto')};
  &:first-of-type {
    margin-top: 0.8rem;
  }

  label {
    margin-top: 0.5rem;
    width: max-content;
    font-weight: bold;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    position: relative;
    margin-right: 1rem;
  }

  input {
    margin-top: 0.5rem;
    padding: 0.2rem;
    font-size: 1rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0.25rem;
    background: transparent;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.special};
    }
  }

  span.error {
    display: block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.deleteColor};
    font-size: 0.8rem;
  }
`;
