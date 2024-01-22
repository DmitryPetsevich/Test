import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/pages/error-page/ErrorPage';
import HomePage from '../components/pages/home-page/HomePage';
import ThermistorChainPage from '../components/pages/thermistor-chain-page/ThermistorChainPage';
import DeformationControlPage from '../components/pages/deformation-control/DeformationControl';

const config: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'measurements/:id',
        element: <ThermistorChainPage />,
      },
      {
        path: 'measurements/trend/:id',
        element: <DeformationControlPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(config);
