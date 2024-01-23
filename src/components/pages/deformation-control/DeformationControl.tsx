import { FC } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';

const DeformationControlPage: FC = () => {
  useTitle('Тестовое задание - Деформационная марка');

  const { data, error } = useFetchData('deformationResponse');

  console.log('data: ', data);
  console.log('error: ', error);

  return <h1>DeformationControl Page</h1>;
};

export default DeformationControlPage;
