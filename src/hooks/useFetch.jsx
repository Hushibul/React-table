import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);

        res?.data && setData(res?.data);
      })
      .catch((err) => {
        setLoading(false);

        err?.message && setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
