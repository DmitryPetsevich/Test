import { Dispatch, SetStateAction, createContext } from 'react';

interface ILoaderContextValue {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoaderContext = createContext<ILoaderContextValue>({
  loading: false,
  setLoading: () => {},
});

export default LoaderContext;
