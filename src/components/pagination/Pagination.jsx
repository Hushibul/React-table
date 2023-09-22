import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import useData from '../../hooks/useData';

export default function PaginationRounded() {
  const { pageIndex, setPageIndex, totalPages } = useData();
  const handlePageChange = (event, page) => {
    // `page` contains the selected page number
    setPageIndex(page);
    console.log('Clicked Page:', page);
  };
  return (
    <div className="pagination-stack">
      <Stack className="pagination-stack" spacing={2}>
        <Pagination
          count={totalPages}
          page={pageIndex}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
}
