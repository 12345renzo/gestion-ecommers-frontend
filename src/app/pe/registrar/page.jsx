import Redes from '@/components/Redes';
import { Grid2, Typography } from '@mui/material'
import React from 'react'

function page() {
  return (
    <div>
      <Grid2 container size={12}>
        <Typography variant="h1">Únete a nosotros</Typography>
      </Grid2>
      <Redes/>
    </div>
  );
}

export default page