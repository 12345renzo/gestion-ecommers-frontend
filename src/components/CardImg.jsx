import { Grid2, Typography } from '@mui/material';
import estilo from "../css/CardImg.module.css";
import React from 'react'

function CardImg({
  titulo,
  activa1,
  contenido,
  content,
  imagen,
}) {
  return (
    <div>
      <Grid2 container size={12} className={estilo.ako}>
        {/*Aki va el titulo y el boton arriba de las opciones */}
        <Grid2
          container
          size={12}
          sx={{ marginBottom: "15px", display: activa1 ? "flex" : "none" }}
        >
          <Grid2 item size={12}>
            <Typography
              variant="h1"
              className={estilo.gh}
              sx={{ fontSize: "56px", fontWeight: "600" }}
            >
              {titulo}
            </Typography>
          </Grid2>
        </Grid2>

        {/*Aqui van las card creadas */}
        <Grid2
          container
          size={12}
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid2
              container
              key={index}
              size={3}
              spacing={0}
              sx={{
                width: "345px",
                borderRadius: "25px",
                backgroundColor: "transparent",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"flex-start",
                "@media (max-width: 815px)": {
                  width: "225px", // Color cuando el ancho es menor a 250px
                },
              }}
            >
              {/*contenido del titulo y subtitulo*/}
              <Grid2
                item
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={imagen[index]}
                  style={{ borderRadius: "25px"}}
                  width={345}
                  height={345}
                  className={estilo.dfg}
                />
              </Grid2>
              <Grid2
                container
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding:"20px"
                }}
              >
                <Typography variant="h4" className={estilo.inde}>
                  {contenido[index]}
                </Typography>
                <Typography variant="subtitle2" className={estilo.ex}>
                  {content[index]}
                </Typography>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default CardImg