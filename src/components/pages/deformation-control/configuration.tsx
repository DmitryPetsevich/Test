import { IDeformationControl } from '../../../interfaces/deformationControl';
import { IHeader } from '../../table/interfaces';

function configuration(data: IDeformationControl[] = []) {
  const config: IHeader[] = [
    {
      key: 'dateTime',
      label: 'Дата и время измерения',
      renderCell: (data: IDeformationControl) => (
        <span>{new Date(data.time).toDateString()}</span>
      ),
    },
    {
      key: 'data.value',
      label: 'Отметка, м',
      renderCell: (data: IDeformationControl) => (
        <span>{data?.data?.value?.toFixed(4) || '---'}</span>
      ),
    },
    {
      key: 'data.delta',
      label: 'Дельта, м',
      renderCell: (data: IDeformationControl) => (
        <span>{data?.data?.delta?.toFixed(4) || '---'}</span>
      ),
    },
  ];

  return config;
}

export default configuration;
