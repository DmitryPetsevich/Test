import { FC } from 'react';
import { IHeader } from '../interfaces';
import { useTableHeader } from '../hooks/useTableHeader';
import TableRow from '../table-row/TableRow';
import TableCell from '../table-cell/TableCell';

interface ITableBodyProps {
  rows: any[];
  columns: IHeader[];
}

const TableBody: FC<ITableBodyProps> = ({ rows, columns }) => {
  const { dataColumns } = useTableHeader(columns);

  return (
    <tbody>
      {rows.map((row, index) => (
        <TableRow key={index}>
          {dataColumns.map(({ key, renderCell, label, tdProps }) => (
            <TableCell key={key} tdProps={tdProps}>
              {renderCell ? renderCell(row) : label}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </tbody>
  );
};

export default TableBody;
