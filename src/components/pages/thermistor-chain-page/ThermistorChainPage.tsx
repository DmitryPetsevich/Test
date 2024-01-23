import { FC, useMemo } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';
import Table from '../../table/Table';
import { IThermistorChain } from '../../../interfaces/thermistorChain';
import configuration from './configuration';

const ThermistorChainPage: FC = () => {
  useTitle('Тестовое задание - Термокоса');

  const { listingData } = useFetchData<IThermistorChain>('termoResponse');

  const headers = useMemo(() => configuration(listingData), [listingData]);

  return listingData?.length ? (
    <>
      <h2>Термометрическая скважина</h2>
      <Table<IThermistorChain> listingData={listingData} headers={headers} />
    </>
  ) : null;
};

export default ThermistorChainPage;
