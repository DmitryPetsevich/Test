import { groupBy } from 'lodash';
import { IHeader } from '../interfaces';

function transformToFlatData(headers: IHeader[], depth = 0): IHeader[] {
  return headers.reduce<IHeader[]>((acc, header) => {
    const col = { ...header, depth };

    acc.push(col);

    if (Object.prototype.hasOwnProperty.call(header, 'children')) {
      return [...acc, ...transformToFlatData(header.children!, depth + 1)];
    }

    return acc;
  }, []);
}

export function useTableHeader(headers: IHeader[]) {
  const flatHeaderData = transformToFlatData(headers);

  const headerRows = groupBy(flatHeaderData, 'depth');
  const dataColumns = flatHeaderData.filter(
    (header) => !Object.prototype.hasOwnProperty.call(header, 'children')
  );

  return {
    headerRows,
    dataColumns,
  };
}
