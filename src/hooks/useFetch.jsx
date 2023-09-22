import axios from 'axios';
import { useEffect, useState } from 'react';
import useData from './useData';

const useFetch = (url) => {
  const { itemsPerPage, pageIndex, setTotalPages } = useData();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}?limit=${itemsPerPage}&skip=${pageIndex * itemsPerPage}`)
      .then((res) => {
        setLoading(false);

        res?.data && setData(res?.data);
        setTotalPages(res?.data?.total / res?.data?.limit);
      })
      .catch((err) => {
        setLoading(false);

        err?.message && setError(err);
      });
  }, [url, itemsPerPage, pageIndex, setTotalPages]);

  return { data, loading, error };
};

export default useFetch;
