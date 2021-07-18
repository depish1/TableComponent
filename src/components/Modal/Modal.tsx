import React, { FunctionComponent, useEffect } from 'react';
import Button from 'components/Button/Button';
import { theme } from 'styles/theme';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledModal } from './Modal.styles';

const modalContainer = document.querySelector('#modal-container');

const validationSchema = yup.object().shape({
  employeFirstName: yup.string().required('Imię jest wymagane'),
  employeLastName: yup.string().required('Nazwisko jest wymagane'),
  employePosition: yup.string().required('Stanowisko jest wymagane'),
  employeDep: yup.string().required('Dział jest wymagany'),
  employeSalary: yup.number().required('Pensja jest wymagana'),
});

interface Props {
  dataset?: IEmployerData;
  id: number;
  closeHandler: () => void;
}

interface IFormInputs {
  employeFirstName: string;
  employeLastName: string;
  employePosition: string;
  employeDep: string;
  employeSalary: number;
}
const Modal: FunctionComponent<Props> = ({ closeHandler, id, dataset = undefined }) => {
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer!.appendChild(modalNode);
    return () => {
      modalContainer!.removeChild(modalNode);
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: dataset,
  });

  const onSubmit = (x: any): void => {
    console.log(x);
  };
  return createPortal(
    <StyledModal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('employeFirstName')} type="text" id="employeFirstName" name="employeFirstName" />
        <span className="error">{errors.employeFirstName?.message}</span>
        <input {...register('employeLastName')} type="text" id="employeLastName" name="employeLastName" />
        <span className="error">{errors.employeLastName?.message}</span>
        <input {...register('employePosition')} type="text" id="employePosition" name="employePosition" />
        <span className="error">{errors.employePosition?.message}</span>
        <input {...register('employeDep')} type="text" id="employeDep" name="employeDep" />
        <span className="error">{errors.employeDep?.message}</span>
        <input {...register('employeSalary')} type="number" id="employeSalary" name="employeSalary" />
        <span className="error">{errors.employeSalary?.message}</span>
        <Button text="Wyślij" color={theme.colors.addColor} />
      </form>
      <Button text="Anuluj" handler={closeHandler} color={theme.colors.deleteColor} />
    </StyledModal>,
    modalNode
  );
};

export default Modal;
