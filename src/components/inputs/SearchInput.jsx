import SearchIcon from '@mui/icons-material/Search';
const SearchInput = () => {
  return (
    <div className='search-box'>
      <input className='search-text' type='text' placeholder='Search...' />
      {/* <a href='#' className='search-btn'></a> */}
      <SearchIcon className='search-btn' />
    </div>
  );
};

export default SearchInput;
