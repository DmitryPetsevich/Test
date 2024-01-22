import { IHeader } from './interfaces';
import TableBody from './table-body/TableBody';
import TableContainer from './table-container/TableContainer';
import TableHead from './table-head/TableHead';
import './Table.style.css';

interface ITableProps<T> {
  listingData: T[];
  columns: IHeader[];
}

function Table<T>({ listingData, columns }: ITableProps<T>) {
  return (
    <TableContainer>
      <TableHead columns={columns}></TableHead>
      <TableBody rows={listingData} columns={columns}></TableBody>
    </TableContainer>
  );
}

export default Table;
