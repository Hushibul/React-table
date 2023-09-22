import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Button variant="contained" href="/users">
          Users
        </Button>
        <Button variant="contained" href="/products">
          Products
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
