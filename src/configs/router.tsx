import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/router/error-page/ErrorPage';

const config: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h1>HOME PAGE</h1>,
      },
      {
        path: 'measurements/:id',
        element: <h1>ThermistorChain PAGE</h1>,
      },
      {
        path: 'measurements/trend/:id',
        element: <h1>DeformationControl PAGE</h1>,
      },
    ],
  },
];

export const router = createBrowserRouter(config);
