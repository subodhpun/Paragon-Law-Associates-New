import React, { createContext, useState, useContext, useEffect } from 'react';
import CustomLoader from '../components/ui/CustomLoader';

const LoadingContext = createContext({
  loading: true,
  setLoading: function(value) {}
});

export const LoadingProvider = ({ children }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsFirstLoad(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [isFirstLoad]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && isFirstLoad ? <CustomLoader /> : children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext); 