import React from 'react'
import '../../../css/login.css'
import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
//import * as yup from 'yup'
//import { useFormik } from 'formik';
import Link from 'next/link';


function page() {
  return (
    <div className="gen">
      <Grid2 container spacing={2} sx={{ border: "1px black solid" }}>
        <Grid2
          container
          size={6}
          spacing={0}
          sx={{ border: "1px black solid" }}
        >
          <Grid2 item size={12} sx={{ border: "1px black solid" }}>
            <Typography
              variant="h2"
              sx={{ fontSize: "56px", fontWeight: "600" }}
            >
              Inicia sesión en tu cuenta LG
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                padding: "8px 0",
                fontSize: "24px",
                fontWeight: "500",
                color: "#333333",
              }}
            >
              Disfruta los beneficios exclusivos comprando en LG.com
            </Typography>
          </Grid2>
          <Grid2 container size={12} sx={{ border: "1px black solid" }}>
            <Box className="formulario">
              <Grid2 item size={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Usuario"
                  className="entrada"
                />
              </Grid2>
              <Grid2 item size={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Contraseña"
                  className="entrada"
                />
              </Grid2>
              <Grid2 item size={12}>
                <Button>Iniciar Secion</Button>
                <Link href='/pe/registrar'>Registrarse</Link>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2
          container
          size={6}
          spacing={0}
          sx={{ border: "1px black solid" }}
        >
          <Grid2 item size={12} sx={{ border: "1px black solid" }}>
            <h1>Se un Miembro</h1>
            <p>Disfruta los beneficios</p>
          </Grid2>
          <Grid2 container size={12} sx={{ border: "1px black solid" }}>
            <Grid2 item size={10} sx={{ border: "1px black solid" }}>
              <h1>Se un Miembro</h1>
              <p>Disfruta los beneficios</p>
            </Grid2>
            <Grid2 item size={2} sx={{ border: "1px black solid" }}>
              <h1>Se un Mieo</h1>
            </Grid2>
          </Grid2>
          <Grid2 container size={12} sx={{ border: "1px black solid" }}>
            <Grid2 item size={10} sx={{ border: "1px black solid" }}>
              <h1>Se un Miembro</h1>
              <p>Disfruta los beneficios</p>
            </Grid2>
            <Grid2 item size={2} sx={{ border: "1px black solid" }}>
              <h1>Se un Mieo</h1>
            </Grid2>
          </Grid2>
          <Grid2 container size={12} sx={{ border: "1px black solid" }}>
            <Grid2 item size={10} sx={{ border: "1px black solid" }}>
              <h1>Se un Miembro</h1>
              <p>Disfruta los beneficios</p>
            </Grid2>
            <Grid2 item size={2} sx={{ border: "1px black solid" }}>
              <h1>Se un Mieo</h1>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default page