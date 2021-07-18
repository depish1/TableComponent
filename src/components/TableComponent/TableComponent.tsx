import React, { FunctionComponent, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import TableHeader from 'components/TableHeader/TableHeader';
import TableRow from 'components/TableRow/TableRow';
import Button from 'components/Button/Button';
import useModal from 'components/Modal/useModal';
import useTableData from 'components/TableComponent/useTableData';
import { theme } from 'styles/theme';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import { getNewId, filterEmployesDataById } from 'utils/helpers';
import { StyledTableComponent, TableContainer } from './TableComponent.styles';

interface Props {
  columns: any;
  dataset: Array<IEmployeData>;
}

const TableComponent: FunctionComponent<Props> = ({ dataset, columns }) => {
  const { Modal, modalOption, handleCloseModal, handleOpenAddModal, handleOpenEditModal } = useModal();
  const { data, handleDelete, handleAdd, handleEdit } = useTableData(dataset);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  useEffect(() => {
    const body = document.querySelector('body');
    body!.style.overflow = modalOption.isOpen ? 'hidden' : 'auto';
  }, [modalOption]);

  return (
    <TableContainer>
      <Filter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
      <StyledTableComponent {...getTableProps()}>
        <TableHeader headerGroups={headerGroups}>
          <Button text="Dodaj" handler={handleOpenAddModal} color={theme.colors.addColor} />
          {modalOption.isOpen && modalOption.modalType === 'add' && (
            <Modal id={getNewId(data)} closeModal={handleCloseModal} submitHandler={handleAdd} />
          )}
        </TableHeader>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const {
              values: { employeId },
            } = row;
            return (
              <TableRow key={employeId} row={row}>
                <Button text="Edytuj" handler={() => handleOpenEditModal(employeId)} color={theme.colors.editColor} />
                <Button text="Usuń" handler={() => handleDelete(employeId)} color={theme.colors.deleteColor} />
                {modalOption.isOpen && modalOption.modalType === 'edit' && modalOption.id === employeId && (
                  <Modal id={employeId} dataset={filterEmployesDataById(data, employeId)} closeModal={handleCloseModal} submitHandler={handleEdit} />
                )}
              </TableRow>
            );
          })}
        </tbody>
      </StyledTableComponent>
    </TableContainer>
  );
};

export default TableComponent;
