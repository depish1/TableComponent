import { useState } from 'react';

interface IUseDataReturn {
  data: IEmployeData[];
  handleDelete: (id: number) => void;
  handleAdd: (formValues: IEmployeData) => void;
  handleEdit: (formValues: IEmployeData) => void;
}

const useTableData = (dataset: IEmployeData[]): IUseDataReturn => {
  const [data, setData] = useState(dataset);
  const handleDelete = (id: number): void => {
    const newData = data.filter((row) => row.employeId !== id);
    setData(newData);
  };

  const handleAdd = (formValues: IEmployeData): void => {
    setData((prevState) => [...prevState, formValues]);
  };
  const handleEdit = (formValues: IEmployeData): void => {
    const index = data.findIndex(({ employeId }) => employeId === formValues.employeId);
    const newData = [...data];
    newData[index] = formValues;
    setData(newData);
  };

  return {
    data,
    handleDelete,
    handleAdd,
    handleEdit,
  };
};

export default useTableData;
