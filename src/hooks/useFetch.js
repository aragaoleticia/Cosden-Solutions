import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '@/api/index.js';

const useFetch = (url, options) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);

      abortController.current = new AbortController();

      try {
        const response = await api.get(url, {
          ...options,
          signal: abortController.current?.signal,
        })
        setData(response.data);
      } catch (error) {
        if(axios.isCancel(error)) {
          return;
        }
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      abortController.current?.abort();
    }

  }, [url, options])

  return { data, error, loading };
}

export default useFetch;