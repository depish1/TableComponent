import React, { FunctionComponent } from 'react';
import SortIcon from 'components/SortIcon/SortIcon';
import { HeaderGroup } from 'react-table';

import { StyledTableHeader, HeaderWrapper } from './TableHeader.styles';

interface Props {
  headerGroups: HeaderGroup<IEmployeData>[];
  children: React.ReactNode;
}
const TableHeader: FunctionComponent<Props> = ({ headerGroups, children }) => {
  return (
    <StyledTableHeader>
      {headerGroups.map(({ getHeaderGroupProps, headers }) => (
        <tr {...getHeaderGroupProps()}>
          {headers.map(({ getHeaderProps, getSortByToggleProps, render, isSorted, isSortedDesc }) => (
            <th {...getHeaderProps(getSortByToggleProps())}>
              <HeaderWrapper>
                {render('Header')}
                <SortIcon isSorted={isSorted} isSortedDesc={isSortedDesc} />
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
