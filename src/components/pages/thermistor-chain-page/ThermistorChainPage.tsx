import { FC, useMemo } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';
import Table from '../../table/Table';
import { IResponse } from '../../../interfaces/common';
import { IThermistorChain } from '../../../interfaces/thermistorChain';
import configuration from './configuration';

const ThermistorChainPage: FC = () => {
  useTitle('Тестовое задание - Термокоса');

  const { data } = useFetchData<IResponse<IThermistorChain>>('termoResponse');

  const headers = useMemo(() => configuration(data?.data), [data]);

  return data ? (
    <>
      <h2>Термометрическая скважина</h2>
      <Table<IThermistorChain> listingData={data?.data} headers={headers} />
    </>
  ) : null;
};

export default ThermistorChainPage;
