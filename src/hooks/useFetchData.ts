import { useEffect, useState } from 'react';
import useLoaderContext from '../contexts/loader-context/useLoaderContext';
import termoResponse from '../mocks/termo_response.json';
import deformationResponse from '../mocks/deformation_response.json';
import termoTrendResponse from '../mocks/termo_trend_response.json';
import deformationTrendResponse from '../mocks/deformation_trend_response.json';

const responses = {
  termoResponse,
  termoTrendResponse,
  deformationResponse,
  deformationTrendResponse,
};

export function useFetchData<T>(responseType: keyof typeof responses) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const { setLoading } = useLoaderContext();

  useEffect(() => {
    setLoading(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(responses[responseType]);
      }, 1500);
    })
      .then((responseData) => {
        setData(responseData as T);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [responseType, setLoading]);

  return { data, error };
}
