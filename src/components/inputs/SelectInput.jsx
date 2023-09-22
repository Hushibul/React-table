import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useData from '../../hooks/useData';
// import * as React from 'react';

export default function SelectInput() {
  const { setItemsPerPage } = useData();
  //   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-simple-select-label'>Entries</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          //   value={entries}
          label='entries'
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
