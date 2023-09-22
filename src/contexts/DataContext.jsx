//== Libraries
import { createContext, useState } from 'react';

export const DataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const values = {
    searchInput,
    setSearchInput,
    itemsPerPage,
    setItemsPerPage,
    pageIndex,
    setPageIndex,
    totalPages,
    setTotalPages,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
