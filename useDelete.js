import { useState } from 'react';

const useDelete = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return [deleteData, data, isLoading, error];
};

export default useDelete;
