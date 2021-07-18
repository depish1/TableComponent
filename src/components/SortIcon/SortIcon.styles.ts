import styled from 'styled-components';

interface Props {
  isSortedDesc: boolean | undefined;
  isSorted: boolean;
}

export const StyledSortIcon = styled.div<Props>`
  height: 1em;
  width: 1em;
  position: relative;
  margin-left: 0.5rem;

  &::after,
  &::before {
    border: 0.4em solid transparent;
    content: '';
    display: block;
    height: 0;
    right: 25%;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 0;
  }

  &::before {
    border-bottom-color: ${({ theme, isSorted, isSortedDesc }) =>
      isSorted ? (!isSortedDesc ? theme.colors.grey : theme.colors.white) : theme.colors.grey};
    margin-top: -0.4em;
  }
  &::after {
    border-top-color: ${({ theme, isSorted, isSortedDesc }) =>
      isSorted ? (isSortedDesc ? theme.colors.grey : theme.colors.white) : theme.colors.grey};
    margin-top: 0.6em;
  }
`;
