export const getNewId = (data: IEmployeData[]): number => {
  const maxIdObj = data.reduce((prev, curr) => {
    return prev.employeId < curr.employeId ? curr : prev;
  });

  return maxIdObj.employeId + 1;
};
export const filterEmployesDataById = (data: IEmployeData[], id: number): IEmployeData => {
  return data.filter((employe) => employe.employeId === id)[0];
};
