import { FC, ReactNode, useState } from 'react';
import LoaderContext from './LoaderContext';

interface ILoaderProviderProps {
  children?: ReactNode;
}

const LoaderProvider: FC<ILoaderProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
