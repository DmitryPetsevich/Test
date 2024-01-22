import { groupBy } from 'lodash';
import { IHeader } from '../interfaces';

function transformToFlatData(columns: IHeader[], depth = 0): IHeader[] {
  return columns.reduce<IHeader[]>((acc, column) => {
    const col = { ...column, depth };

    acc.push(col);

    if (Object.prototype.hasOwnProperty.call(column, 'children')) {
      return [...acc, ...transformToFlatData(column.children!, depth + 1)];
    }

    return acc;
  }, []);
}

export function useTableHeader(data: IHeader[]) {
  const flatHeaderData = transformToFlatData(data);

  const headerRows = groupBy(flatHeaderData, 'depth');
  const dataColumns = flatHeaderData.filter(
    (column) => !Object.prototype.hasOwnProperty.call(column, 'children')
  );

  return {
    headerRows,
    dataColumns,
  };
}
