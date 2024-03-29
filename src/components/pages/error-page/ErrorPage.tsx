import { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import { useTitle } from '../../../hooks/useTitle';
import './ErrorPage.style.css';

const ErrorPage: FC = () => {
  useTitle('Тестовое задание - Ошибка');
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as { statusText: string }).statusText ||
            (error as Error).message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
