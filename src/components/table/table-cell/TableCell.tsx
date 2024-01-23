import { FC, ReactNode } from 'react';

interface ITableCellProps {
  header?: boolean;
  children?: ReactNode;
  thProps?: {
    [key: string]: string | Object;
  };
  tdProps?: {
    [key: string]: string | Object;
  };
}

const TableCell: FC<ITableCellProps> = ({
  header = false,
  children,
  thProps,
  tdProps,
}) => {
  return header ? (
    <th {...thProps}>{children}</th>
  ) : (
    <td {...tdProps}>{children}</td>
  );
};

export default TableCell;
