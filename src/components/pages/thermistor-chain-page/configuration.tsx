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
      thProps: {
        style: {
          background: '#55e8b6',
        },
      },
      tdProps: {
        style: {
          textAlign: 'center',
        },
      },
    })
  );

  const config: IHeader[] = [
    {
      key: 'dateTime',
      label: 'Дата и время измерения',
      thProps: {
        rowSpan: '2',
        style: {
          background: 'lightskyblue',
        },
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
      thProps: {
        rowSpan: '2',
        style: {
          background: 'lightskyblue',
        },
      },
      renderCell: (data: IThermistorChain) => (
        <span>{data.averageTemperature.toFixed(2)}</span>
      ),
    },
    {
      key: 'deepth',
      label: 'Глубина, м',
      children: dataColumns.sort((a, b) => (+a.key > +b.key ? 1 : -1)),
      thProps: {
        colSpan: `${dataColumns.length}`,
        style: {
          background: 'lightskyblue',
        },
      },
    },
  ];

  return config;
}

export default configuration;
