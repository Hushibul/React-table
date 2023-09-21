import { useContext } from 'react';

//== Components
import { DataContext } from '../contexts/DataContext';

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataProvider`);
  }
  return context;
};

export default useData;
