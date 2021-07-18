import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';

interface ModalProps {
  dataset?: IEmployeData;
  id: number;
  submitHandler: (x: IEmployeData) => void;
  closeModal: () => void;
}

interface IUseModalReturn {
  Modal: React.FunctionComponent<ModalProps>;
  modalOption: IModalOptions;
  handleCloseModal: () => void;
  handleOpenAddModal: () => void;
  handleOpenEditModal: (employeId: number) => void;
}

const useModal = (): IUseModalReturn => {
  const [modalOption, setModalOption] = useState<IModalOptions>({ isOpen: false, modalType: null, id: null });
  const handleCloseModal = (): void => {
    setModalOption({ isOpen: false, modalType: null, id: null });
  };
  const handleOpenAddModal = (): void => {
    setModalOption({ isOpen: true, modalType: 'add', id: null });
  };
  const handleOpenEditModal = (employeId: number): void => {
    setModalOption({ isOpen: true, modalType: 'edit', id: employeId });
  };

  return {
    Modal,
    modalOption,
    handleCloseModal,
    handleOpenAddModal,
    handleOpenEditModal,
  };
};

export default useModal;
