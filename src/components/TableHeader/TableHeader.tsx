import React, { FunctionComponent } from 'react';
import SortIcon from 'components/SortIcon/SortIcon';
import { HeaderGroup, ColumnInstance, TableState, Row } from 'react-table';

import { StyledTableHeader, HeaderWrapper } from './TableHeader.styles';

interface Props {
  headerGroups: HeaderGroup<IEmployerData>[];
  visibleColumns: ColumnInstance<IEmployerData>[];
  state: TableState<IEmployerData>;
  preGlobalFilteredRows: Row<IEmployerData>[];
  setGlobalFilter: (filterValue: any) => void;
  children: React.ReactNode;
}
const TableHeader: FunctionComponent<Props> = ({ headerGroups, children }) => {
  return (
    <StyledTableHeader>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              <HeaderWrapper>
                {column.render('Header')}
                <SortIcon isSorted={column.isSorted} isSortedDesc={column.isSortedDesc} />
              </HeaderWrapper>
            </th>
          ))}
          <th>{children}</th>
        </tr>
      ))}
    </StyledTableHeader>
  );
};

export default TableHeader;
