import { useState, useEffect } from 'react';
import { hanziObject } from '../types/hanziObject';

/**
 * Custom hook to fetch an API and store the response in an object
 * Fetch is within useEffect so it reload for each change in url or method
 */
export function useFetch(url: string, method: string = 'GET') {
  const [data, setData] = useState<hanziObject[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url, { method: method });
        const json: hanziObject[] = await response.json();
        setData(json);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, method]);
  return { isLoading, data, isError };
}
