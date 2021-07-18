import React, { FunctionComponent, useState } from 'react';
import Filter from 'components/Filter/Filter';
import TableHeader from 'components/TableHeader/TableHeader';
import TableRow from 'components/TableRow/TableRow';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import { theme } from 'styles/theme';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import { getNewId, filterEmployesDataById } from 'utils/helpers';
import { StyledTableComponent, TableContainer } from './TableComponent.styles';

interface Props {
  columns: any;
  dataset: Array<IEmployerData>;
}

const TableComponent: FunctionComponent<Props> = ({ dataset, columns }) => {
  const [data, setData] = useState(dataset);
  const [modalOption, setModalOption] = useState({ isOpen: false, modalType: '' });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, visibleColumns, preGlobalFilteredRows, setGlobalFilter } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useGlobalFilter,
      useSortBy
    );

  const deleteHandler = (id: number): void => {
    const newData = data.filter((row) => row.employeId !== id);
    setData(newData);
  };

  const closeModalHandler = (): void => {
    setModalOption({ isOpen: false, modalType: '' });
  };

  return (
    <TableContainer>
      <Filter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
      <StyledTableComponent {...getTableProps()}>
        <TableHeader
          headerGroups={headerGroups}
          visibleColumns={visibleColumns}
          state={state}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
        >
          <Button text="Dodaj" handler={() => setModalOption({ isOpen: true, modalType: 'add' })} color={theme.colors.addColor} />
          {modalOption.isOpen && modalOption.modalType === 'add' && <Modal id={getNewId(data)} closeHandler={closeModalHandler} />}
        </TableHeader>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const id = row.values.employeId;
            return (
              <TableRow key={id} row={row}>
                <Button text="Edytuj" handler={() => setModalOption({ isOpen: true, modalType: 'edit' })} color={theme.colors.editColor} />
                <Button text="Usuń" handler={() => deleteHandler(id)} color={theme.colors.deleteColor} />
                {modalOption.isOpen && modalOption.modalType === 'edit' && (
                  <Modal id={id} dataset={filterEmployesDataById(data, id)} closeHandler={closeModalHandler} />
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
