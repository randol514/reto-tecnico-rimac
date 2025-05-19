import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const getApi = async () => {
      setLoading(true);
      try {
        console.log("Fetching:", url);
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    getApi();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
