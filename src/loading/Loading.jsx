import { Box, Skeleton } from '@mui/material';

function Loading() {
  return (
    <Box sx={{ maxWidth: 700, margin: 'auto', minHeight: '100vh' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation={false} />
      <Skeleton animation={false} />
      <Skeleton animation={false} />
    </Box>
  );
}

export default Loading;
