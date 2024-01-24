import { FC, useEffect, useMemo, useState } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';
import Table from '../../table/Table';
import { IThermistorChain } from '../../../interfaces/thermistorChain';
import configuration from './configuration';
import moment from 'moment';

const ThermistorChainPage: FC = () => {
  useTitle('Тестовое задание - Термокоса');

  const [listingData, setListingData] = useState<IThermistorChain[]>([]);

  const {
    data: { data },
  } = useFetchData<IThermistorChain[]>('termoResponse');

  const headers = useMemo(() => configuration(data), [data]);

  useEffect(() => {
    const filtered = (data || []).sort((a, b) =>
      moment(a.time).isBefore(moment(b.time)) ? 1 : -1
    );
    setListingData(filtered);
  }, [data]);

  return listingData.length ? (
    <>
      <h2>Термометрическая скважина</h2>
      <Table<IThermistorChain> listingData={listingData} headers={headers} />
    </>
  ) : null;
};

export default ThermistorChainPage;
