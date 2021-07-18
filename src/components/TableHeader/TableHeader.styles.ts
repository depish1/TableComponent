import styled from 'styled-components';

export const StyledTableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};

  th {
    padding: 1rem 0.7rem;
    text-align: center;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.headerBackgroundHover};
    }

    &:last-child:hover {
      background-color: ${({ theme }) => theme.colors.headerBackground};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 100%;

      @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    th {
      display: flex;
      align-items: center;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;
