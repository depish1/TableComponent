import React, { FunctionComponent, useState } from 'react';
import FormField from 'components/FormField/FormField';
import { useAsyncDebounce } from 'react-table';

interface Props {
  globalFilter: any;
  setGlobalFilter: (filterValue: any) => void;
}

const Filter: FunctionComponent<Props> = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((inputValue) => {
    setGlobalFilter(inputValue || undefined);
  }, 200);

  return (
    <FormField id="filter" label="Szukaj:" dir="row">
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        type="text"
        id="filter"
        name="filter"
      />
    </FormField>
  );
};

export default Filter;
