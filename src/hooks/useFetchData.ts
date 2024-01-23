import { useEffect, useState } from 'react';
import useLoaderContext from '../contexts/loader-context/useLoaderContext';
import termoResponse from '../mocks/termo_response.json';
import deformationResponse from '../mocks/deformation_response.json';
import termoTrendResponse from '../mocks/termo_trend_response.json';
import deformationTrendResponse from '../mocks/deformation_trend_response.json';
import { IResponse, ISensor } from '../interfaces/common';
import moment from 'moment';

const responses = {
  termoResponse,
  termoTrendResponse,
  deformationResponse,
  deformationTrendResponse,
};

export function useFetchData<T extends ISensor>(
  responseType: keyof typeof responses
) {
  const [data, setData] = useState<IResponse<T>>();
  const [error, setError] = useState(null);
  const { setLoading } = useLoaderContext();

  useEffect(() => {
    setLoading(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(responses[responseType]);
      }, 1500);
    })
      .then((responseData) => responseData as IResponse<T>)
      .then((responseData) => {
        const data = responseData.data.sort((a, b) =>
          moment(a.time).isBefore(moment(b.time)) ? 1 : -1
        );
        const sorted = {
          ...responseData,
          data,
        };
        setData(sorted);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [responseType, setLoading]);

  return { data, error, listingData: data?.data };
}
