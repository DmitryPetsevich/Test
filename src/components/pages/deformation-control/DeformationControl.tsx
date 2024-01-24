import { FC, useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';
import { IDeformationControl } from '../../../interfaces/deformationControl';
import Table from '../../table/Table';
import configuration from './configuration';

const DeformationControlPage: FC = () => {
  useTitle('Тестовое задание - Деформационная марка');

  const [listingData, setListingData] = useState<IDeformationControl[]>([]);

  const {
    data: { data },
  } = useFetchData<IDeformationControl[]>('deformationResponse');

  const headers = useMemo(() => configuration(data), [data]);

  useEffect(() => {
    const filtered = (data || []).sort((a, b) =>
      moment(a.time).isBefore(moment(b.time)) ? 1 : -1
    );
    setListingData(filtered);
  }, [data]);

  return listingData.length ? (
    <>
      <h2>Деформационная марка</h2>
      <Table<IDeformationControl> listingData={listingData} headers={headers} />
    </>
  ) : null;
};

export default DeformationControlPage;
