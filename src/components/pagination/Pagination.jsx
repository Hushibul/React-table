import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useData from '../../hooks/useData';

export default function PaginationRounded() {
  const { pageIndex, setPageIndex } = useData();
  const handlePageChange = (event, page) => {
    // `page` contains the selected page number
    setPageIndex(page);
    console.log('Clicked Page:', page);
  };
  return (
    <div className='pagination-stack'>
      <Stack className='pagination-stack' spacing={2}>
        <Pagination
          className='custom-pagination'
          count={10}
          shape='rounded'
          page={pageIndex}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
