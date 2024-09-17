import { useState } from 'react';

const useFakeRequest = () => {
  const [requestLoading, setRequestLoading] = useState(false);

  const onFakeRequest = (duration) => {
    setRequestLoading(true);

    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        setRequestLoading(false);
      }, duration || 2000)
    );
  };

  return { requestLoading, onFakeRequest };
};

export default useFakeRequest;
