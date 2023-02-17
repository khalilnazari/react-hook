import { useState } from 'react';

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return [postData, data, isLoading, error];
};

export default usePost;
