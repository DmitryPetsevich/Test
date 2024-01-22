import { FC, ReactNode } from 'react';

interface ITableCellProps {
  header?: boolean;
  children?: ReactNode;
  props?: {
    [key: string]: string;
  };
}

const TableCell: FC<ITableCellProps> = ({
  header = false,
  children,
  props,
}) => {
  return header ? (
    <th {...props}>{children}</th>
  ) : (
    <td {...props}>{children}</td>
  );
};

export default TableCell;
