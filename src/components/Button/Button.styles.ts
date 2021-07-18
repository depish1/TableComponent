import styled from 'styled-components';

interface Props {
  color: string;
}

export const StyledButton = styled.button<Props>`
  padding: 0.5rem;
  background-color: ${(p) => p.color};
  cursor: pointer;
  color: white;
  border: 3px solid ${(p) => p.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: 0.2s ease-in-out;
  margin: 0 0.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${(p) => p.color};
  }
`;
