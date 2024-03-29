import { IHeader } from './interfaces';
import TableBody from './table-body/TableBody';
import TableContainer from './table-container/TableContainer';
import TableHead from './table-head/TableHead';
import './Table.style.css';

interface ITableProps<T> {
  listingData: T[];
  headers: IHeader[];
}

function Table<T>({ listingData, headers }: ITableProps<T>) {
  return (
    <TableContainer>
      <TableHead headers={headers} />
      <TableBody rows={listingData} columns={headers} />
    </TableContainer>
  );
}

export default Table;
