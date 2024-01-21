import { useContext } from 'react';
import LoaderContext from './LoaderContext';

export default function useLoaderContext() {
  return useContext(LoaderContext);
}
