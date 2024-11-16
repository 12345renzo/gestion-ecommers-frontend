import { Grid2, Typography } from '@mui/material';
import Link from 'next/link';
import estilo from "../css/Especial.module.css";
import React from 'react'

function Especial({titulo, contenido, content, imagen, activa1, activa2, ruta }) {
  return (
    <div>
      <Grid2 container size={12} className={estilo.ako}>
        <Grid2
          container
          size={12}
          sx={{ display: activa2 ? "flex" : "none", marginTop: "15px" }}
        >
          <Grid2 item size={12}>
            <Typography
              variant="h1"
              className="gh"
              sx={{fontSize: "56px", fontWeight: "600", paddingTop:"73px" }}
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
            marginBottom: "15px",
          }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid2
              container
              key={index}
              size={6}
              sx={{
                width: "635px",
                borderRadius: "25px",
                backgroundColor: "#e6e1d6",
                marginTop: "25px",
                marginBottom: "25px",
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
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  //width: "222px",
                }}
              >
                <Typography variant="h3" className={estilo.inde}>
                  {contenido[index]}
                </Typography>
                <Typography variant="subtitle2" className={estilo.ex}>
                  {content[index]}
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
                  display: activa1 ? "flex" : "none",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Link href={ruta[index]} className={estilo.flecha}>
                  <svg
                    width="42.4"
                    height="42.4"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6506 8.64064L8.66608 3.50034L9.18205 3L15.0002 9L9.18205 15L8.66608 14.4997L13.6506 9.35936H3V8.64064H13.6506Z"
                    />
                  </svg>
                </Link>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Especial