import { FC, useMemo } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';
import { IResponse } from '../../../interfaces/common';
import { IDeformationControl } from '../../../interfaces/deformationControl';
import Table from '../../table/Table';
import configuration from './configuration';

const DeformationControlPage: FC = () => {
  useTitle('Тестовое задание - Деформационная марка');

  const { data } = useFetchData<IResponse<IDeformationControl>>(
    'deformationResponse'
  );

  const headers = useMemo(() => configuration(data?.data), [data]);

  return data ? (
    <>
      <h2>Деформационная марка</h2>
      <Table<IDeformationControl> listingData={data?.data} headers={headers} />
    </>
  ) : null;
};

export default DeformationControlPage;
