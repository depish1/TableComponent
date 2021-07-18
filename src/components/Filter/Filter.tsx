import React, { FunctionComponent, useState } from 'react';
import { useAsyncDebounce, Row } from 'react-table';
import { StyledFilter } from './Filter.styles';

interface Props {
  preGlobalFilteredRows: Row<IEmployerData>[];
  globalFilter: any;
  setGlobalFilter: (filterValue: any) => void;
}

const Filter: FunctionComponent<Props> = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value2) => {
    setGlobalFilter(value2 || undefined);
  }, 200);

  return (
    <StyledFilter>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </StyledFilter>
  );
};

export default Filter;
