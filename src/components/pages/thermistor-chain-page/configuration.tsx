import { IThermistorChain } from '../../../interfaces/thermistorChain';
import { IHeader } from '../../table/interfaces';

function configuration(data: IThermistorChain[] = []) {
  const uniqueDataColumnKeys = data.reduce((acc, current) => {
    Object.keys(current.data).forEach((key) => acc.add(key));

    return acc;
  }, new Set<string>([]));

  const dataColumns: IHeader[] = Array.from(uniqueDataColumnKeys).map(
    (key) => ({
      key,
      label: key,
      renderCell: (data: IThermistorChain) => {
        return <span>{data.data[+key]?.value.toFixed(2) || ''}</span>;
      },
    })
  );

  const config: IHeader[] = [
    {
      key: 'dateTime',
      label: 'Дата и время измерения',
      props: {
        rowSpan: '2',
      },
      renderCell: (data: IThermistorChain) => (
        <span>{new Date(data.time).toDateString()}</span>
      ),
    },
    {
      key: 'tAverage',
      label: 'Средняя температура',
      renderHead: (
        <span>
          T<sub>e</sub>
        </span>
      ),
      props: {
        rowSpan: '2',
      },
      renderCell: (data: IThermistorChain) => (
        <span>{data.averageTemperature.toFixed(2)}</span>
      ),
    },
    {
      key: 'deepth',
      label: 'Глубина, м',
      children: dataColumns.sort((a, b) => (+a.key > +b.key ? 1 : -1)),
      props: {
        colSpan: `${dataColumns.length}`,
      },
    },
  ];

  return config;
}

export default configuration;
