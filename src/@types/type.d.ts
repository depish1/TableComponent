interface IEmployeData {
  employeId: number;
  employeFirstName: string;
  employeLastName: string;
  employePosition: string;
  employeDep: string;
  employeSalary: number;
}

interface IColumn {
  Header: string;
  accessor: string;
}

interface IModalOptions {
  isOpen: boolean;
  modalType: string | null;
  id: number | any;
}
