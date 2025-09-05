import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </div>
  )
}

export default App
