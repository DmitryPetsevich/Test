import { FC, ReactNode } from 'react';

interface ITableContainerProps {
  className?: string;
  children?: ReactNode;
}

const TableContainer: FC<ITableContainerProps> = ({
  children,
  className = '',
}) => (
  <div className="table-container">
    <table className={`table ${className}`}>{children}</table>
  </div>
);

export default TableContainer;
