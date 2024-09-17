import { useState, useCallback } from 'react';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const useFakeRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return {refreshing, onRefresh}
};

export default useFakeRefresh;
