import { FC } from 'react';
import { IHeader } from '../interfaces';
import { useTableHeader } from '../hooks/useTableHeader';
import TableRow from '../table-row/TableRow';
import TableCell from '../table-cell/TableCell';

interface ITableHeadProps {
  headers: IHeader[];
}

const TableHead: FC<ITableHeadProps> = ({ headers = [] }) => {
  const { headerRows } = useTableHeader(headers);

  return (
    <thead>
      {Object.entries(headerRows).map(([key, headerColumns]) => (
        <TableRow key={key}>
          {headerColumns.map(({ key, label, renderHead, props }) => (
            <TableCell key={key} header props={props}>
              {renderHead || label}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </thead>
  );
};

export default TableHead;
