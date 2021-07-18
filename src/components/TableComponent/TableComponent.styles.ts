import styled from 'styled-components';

export const TableContainer = styled.div`
  padding: 1rem;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 600px;
  }
`;

export const StyledTableComponent = styled.table`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-collapse: separate;
  border-spacing: 0;

  tr:last-child td:first-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  }
  tr:first-child th:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
  }

  tr:first-child th:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    box-shadow: none;

    tbody {
      width: 100%;
    }
    thead,
    tbody,
    td {
      display: block;
    }
  }
`;
