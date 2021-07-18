import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.secondaryBackground};
  }

  td {
    padding: 1rem 0.7rem;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.white};
    }

    td {
      display: flex;
      justify-content: center;
      border: none;
      position: relative;
      padding-left: 50%;
      width: 100%;

      &:before {
        display: block;
        text-align: left;
        padding: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 45%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.headerBackground};
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
      }

      &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};

        &:before {
          background-color: ${({ theme }) => theme.colors.headerBackgroundHover};
        }
      }

      &:nth-of-type(1):before {
        content: 'Id:';
      }
      &:nth-of-type(2):before {
        content: 'Imię:';
      }
      &:nth-of-type(3):before {
        content: 'Nazwisko:';
      }
      &:nth-of-type(4):before {
        content: 'Wiek:';
      }
      &:nth-of-type(5):before {
        content: 'Stanowisko:';
      }
      &:nth-of-type(6):before {
        content: 'Dział:';
      }
      &:nth-of-type(7):before {
        content: 'Pensja:';
      }
      &:nth-of-type(8):before {
        content: '';
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-around;
  }
`;
