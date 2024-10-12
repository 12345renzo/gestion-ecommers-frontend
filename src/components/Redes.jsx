import { Grid2, Typography } from '@mui/material'
import React from 'react'
import Red from './Red';
import "../css/Redes.css";

export default function Redes() {
  return (
    <div>
      <Grid2 container size={12} spacing={1} className="op">
        <Grid2 item size={12} className="redes">
          <Typography variant="subtitle2" className="xt">
            O visitanos a través de:
          </Typography>
        </Grid2>
        <Grid2
          container
          size={12}
          spacing={2}
          className="redes1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <Red
            url="/facebook.svg"
            direccion="https://www.facebook.com/LGPeru"
          />
          <Red url="/twitter.png" direccion="https://twitter.com/lgespana" />
          <Red url="/tiktok.png" direccion="https://www.tiktok.com/@lg_peru" />
          <Red
            url="/instagran.png"
            direccion="https://www.instagram.com/lg_peru/"
          />
        </Grid2>
      </Grid2>
    </div>
  );
}
