import styled from 'styled-components';

export const StyledModal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 3rem;
  margin: 1rem;
`;

export const ModalBackground = styled.div`
  position: fixed;
  overflow-y: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
`;

export const FormButtonsWrapper = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;

export const FormHeadline = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.7rem;
`;
