import { Grid2 } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import "../css/Redes.css";

export default function Red({ url, direccion }) {
  return (
    <div>
      <Grid2
        item
        size={1}
        className="red"
        sx={{
          width: "108px",
          height: "108px",
          borderRadius: "50%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link href={direccion} target='_blank'>
          <img alt="stipe" src={url} className="im" />
        </Link>
      </Grid2>
    </div>
  );
}
