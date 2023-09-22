import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
const SearchInput = () => {
  const searchInput = useRef('');
  const changeHandler = () => {
    console.log(searchInput.current.value);
  };
  return (
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Search..."
        ref={searchInput}
        onChange={changeHandler}
      />
      {/* <a href='#' className='search-btn'></a> */}
      <SearchIcon className="search-btn" />
    </div>
  );
};

export default SearchInput;
