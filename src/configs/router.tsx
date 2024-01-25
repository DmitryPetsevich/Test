import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/pages/error-page/ErrorPage';
import HomePage from '../components/pages/home-page/HomePage';
import ThermistorChainPage from '../components/pages/thermistor-chain-page/ThermistorChainPage';
import DeformationControlPage from '../components/pages/deformation-control-page/DeformationControlPage';

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
        path: 'thermistor-chain',
        element: <ThermistorChainPage />,
      },
      {
        path: 'deformation-control',
        element: <DeformationControlPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(config);
