import React, { useState, useEffect } from 'react';
import CustomLoader from '../ui/CustomLoader';

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        {loading ? (
          <CustomLoader />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
};

export default withLoader; 