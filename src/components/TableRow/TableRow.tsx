import React, { FunctionComponent } from 'react';
import { Row } from 'react-table';
import { StyledTableRow, ButtonsWrapper } from './TableRow.styles';

interface Props {
  row: Row<IEmployerData>;
  children: React.ReactNode;
}
const TableRow: FunctionComponent<Props> = ({ row, children }) => {
  return (
    <StyledTableRow {...row.getRowProps()}>
      {row.cells.map((cell) => {
        if (cell.column.id === 'employeSalary') return <td {...cell.getCellProps()}>{`${cell.value} zł`}</td>;
        return <td {...cell.getCellProps()}>{cell.value}</td>;
      })}
      <td>
        <ButtonsWrapper>{children}</ButtonsWrapper>
      </td>
    </StyledTableRow>
  );
};

export default TableRow;
