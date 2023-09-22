/* eslint-disable react/prop-types */

import { Box } from '@mui/material';
import SelectInput from './inputs/SelectInput';
import { useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Table = ({ tableData, tableInfo }) => {
  const [dataItem, setDataItem] = useState(tableData);

  const searchInput = useRef('');
  const changeHandler = () => {
    let searchText = searchInput.current.value;
    let updatedList = [...tableData];
    updatedList = updatedList.filter(
      (item) =>
        (item.firstName &&
          item?.firstName.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.lastName &&
          item?.lastName.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.maidenName &&
          item?.maidenName.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.gender &&
          item?.gender.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.title &&
          item?.title.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.brand &&
          item?.brand.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.category &&
          item?.category.toLowerCase().includes(searchText.toLowerCase()))
    );
    setDataItem(updatedList);
  };

  return (
    <Box>
      <div className="filter">
        <SelectInput />
        <div className="search-box">
          <input
            className="search-text"
            type="text"
            placeholder="Search..."
            ref={searchInput}
            onChange={changeHandler}
          />
          <SearchIcon className="search-btn" />
        </div>
      </div>
      <div className="wrapper">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {tableInfo.map((item, index) => (
                  <th key={index}>{item.columnHeading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataItem?.map((item, index) => (
                <tr key={index}>
                  {tableInfo.map((key, index) => (
                    <td key={index}>{item[key.columnKey]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};

export default Table;
