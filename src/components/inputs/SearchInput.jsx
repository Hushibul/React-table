const SearchInput = () => {
  return (
    <div className='search-box'>
      <input
        className='search-text'
        type='text'
        placeholder='Search Anything'
      />
      <a href='#' className='search-btn'></a>
    </div>
  );
};

export default SearchInput;
