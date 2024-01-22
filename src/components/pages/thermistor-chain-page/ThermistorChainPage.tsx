import { FC } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useFetchData } from '../../../hooks/useFetchData';

const ThermistorChainPage: FC = () => {
  useTitle('Тестовое задание - Термокоса');

  const { data, error } = useFetchData('/mock-data/termo_response.json');

  console.log('data: ', data);
  console.log('error: ', error);

  return <h1>ThermistorChain Page</h1>;
};

export default ThermistorChainPage;
