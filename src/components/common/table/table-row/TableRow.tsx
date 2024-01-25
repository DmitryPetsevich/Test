import { FC, ReactNode } from 'react';

interface ITableRowProps {
  children?: ReactNode;
}

const TableRow: FC<ITableRowProps> = ({ children }) => <tr>{children}</tr>;

export default TableRow;
