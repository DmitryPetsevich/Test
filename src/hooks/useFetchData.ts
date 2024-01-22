import { useEffect, useState } from 'react';
import useLoaderContext from '../contexts/loader-context/useLoaderContext';

export function useFetchData<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const { setLoading } = useLoaderContext();

  useEffect(() => {
    setLoading(true);

    fetch(url, { ...options })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, [url, options, setLoading]);

  return { data, error };
}
