import {useState, useEffect} from 'react';
import api from './api';

export default function useFetch(path = '') {
  const [data, setData] = useState(null);
  const [isLoadding, setIsLoadding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (path) {
      (async () => {
        try {
          setError(null);
          setIsLoadding(true);

          const request = await api.get(path);
          setData(request.data);
        } catch (e) {
          setError(e);
        } finally {
          setIsLoadding(false);
        }
      })();
    }
  }, [path]);

  return {
    data,
    isLoadding,
    error,
  };
}
