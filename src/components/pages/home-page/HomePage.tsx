import { FC } from 'react';
import { useTitle } from '../../../hooks/useTitle';

const HomePage: FC = () => {
  useTitle('Тестовое задание - Домашняя страница');

  return <h1>Home Page</h1>;
};

export default HomePage;
