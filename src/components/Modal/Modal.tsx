import React, { FunctionComponent, useEffect } from 'react';
import Button from 'components/Button/Button';
import FormField from 'components/FormField/FormField';
import { theme } from 'styles/theme';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledModal, FormButtonsWrapper, FormHeadline, ModalBackground } from './Modal.styles';

const modalContainer = document.querySelector('#modal-container');

const validationSchema = yup.object().shape({
  employeFirstName: yup.string().required('Imię jest wymagane'),
  employeLastName: yup.string().required('Nazwisko jest wymagane'),
  employePosition: yup.string().required('Stanowisko jest wymagane'),
  employeDep: yup.string().required('Dział jest wymagany'),
  employeSalary: yup.number().typeError('Wymagana liczba').required('Pensja jest wymagana'),
});

interface Props {
  dataset?: IEmployeData;
  id: number;
  submitHandler: (x: IEmployeData) => void;
  closeModal: () => void;
}

interface IFormInputs {
  employeId: number;
  employeFirstName: string;
  employeLastName: string;
  employeAge: string;
  employePosition: string;
  employeDep: string;
  employeSalary: number;
}
const Modal: FunctionComponent<Props> = ({ closeModal, id, submitHandler, dataset = undefined }) => {
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer!.append(modalNode);
    return () => {
      modalNode.remove();
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: { ...dataset, employeId: id },
  });

  const onSubmit = (formValues: IEmployeData): void => {
    submitHandler(formValues);
    closeModal();
  };

  const handleBackgroundClose = (e: React.MouseEvent<HTMLElement>): void => {
    if ((e.target as HTMLElement).tagName === 'DIV') closeModal();
  };
  return createPortal(
    <ModalBackground onClick={handleBackgroundClose}>
      <StyledModal>
        <FormHeadline>{dataset ? 'Edytuj pracownika' : 'Dodaj pracownika'}</FormHeadline>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField id="employeFirstName" label="Imię:">
            <input {...register('employeFirstName')} type="text" id="employeFirstName" name="employeFirstName" />
            <span className="error">{errors.employeFirstName?.message}</span>
          </FormField>
          <FormField id="employeLastName" label="Nazwisko:">
            <input {...register('employeLastName')} type="text" id="employeLastName" name="employeLastName" />
            <span className="error">{errors.employeLastName?.message}</span>
          </FormField>
          <FormField id="employeAge" label="Wiek:">
            <input {...register('employeAge')} type="text" id="employeAge" name="employeAge" />
            <span className="error">{errors.employeAge?.message}</span>
          </FormField>
          <FormField id="employePosition" label="Stanowisko:">
            <input {...register('employePosition')} type="text" id="employePosition" name="employePosition" />
            <span className="error">{errors.employePosition?.message}</span>
          </FormField>
          <FormField id="employeDep" label="Dział:">
            <input {...register('employeDep')} type="text" id="employeDep" name="employeDep" />
            <span className="error">{errors.employeDep?.message}</span>
          </FormField>
          <FormField id="employeSalary" label="Pensja:">
            <input {...register('employeSalary')} type="number" id="employeSalary" name="employeSalary" />
            <span className="error">{errors.employeSalary?.message}</span>
          </FormField>
          <FormButtonsWrapper>
            <Button type="submit" text="Potwierdź" color={theme.colors.addColor} />
            <Button text="Anuluj" handler={closeModal} color={theme.colors.deleteColor} />
          </FormButtonsWrapper>
        </form>
      </StyledModal>
    </ModalBackground>,
    modalNode
  );
};

export default Modal;
