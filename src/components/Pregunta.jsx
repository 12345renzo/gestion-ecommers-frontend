import { Grid2, Typography } from '@mui/material';
import estilo from "../css/Contacto.module.css";
import Link from 'next/link';
import React from "react";

function Pregunta({titulo, contenido, content, imagen,ruta, fecha,activa1, cont,boton}) {
  return (
    <div className={estilo.cabecera}>
      <Grid2 container size={12}>
        {/*Aki va el titulo y el boton arriba de las opciones */}
        <Grid2 container size={12} sx={{ marginBottom: "15px" }}>
          <Grid2 item size={12}>
            <Typography
              variant="h1"
              className={estilo.titulo}
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
          spacing={2}
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
              size={6}
              sx={{
                width: "635px",
                height:"450px",
                borderRadius: "25px",
                backgroundColor: "white",
                padding: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/*contenido del titulo y subtitulo*/}
              <Grid2
                container
                size={9}
                className={estilo.etl}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "480px",
                }}
              >
                <Typography variant="h3" className={estilo.inde}>
                  {contenido[index]}
                </Typography>
                <Typography variant="subtitle2" className={estilo.ex}>
                  {content[index]}
                </Typography>
                {Array.from(Array(3)).map((_, inte) => (
                  <div
                    key={inte}
                    style={{ display: activa1[index] ? "flex" : "none" }}
                  >
                    <Typography variant="subtitle1" className={estilo.fecha}>
                      ► {fecha[inte]}
                    </Typography>
                  </div>
                ))}
                <Typography variant="subtitle2" className={estilo.ex}>
                  {cont[index]}
                </Typography>
              </Grid2>
              <Grid2
                item
                size={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "72px",
                }}
              >
                <img
                  src={imagen[index]}
                  style={{ marginTop: "10px" }}
                  width={72}
                  height={72}
                  className={estilo.dfg}
                />
              </Grid2>

              {/*boton flecha */}
              <Grid2
                container
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Link
                  href={ruta[index]}
                  className={estilo.flecha}
                >
                  {boton[index]}
                </Link>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Pregunta