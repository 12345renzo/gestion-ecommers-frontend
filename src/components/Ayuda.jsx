import { Grid2, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import "../css/Ayuda.css"

function Ayuda({titulo,subtitle,activa1,contenido,content,imagen}) {
  return (
    <div>
      <Grid2 container size={12} className="ako">
        {/*Aki va el titulo y el boton arriba de las opciones */}
        <Grid2 container size={12}>
          <Grid2 item size={10}>
            <Typography
              variant="h1"
              className='gh'
              sx={{ fontSize: "56px", fontWeight: "600" }}
            >
              {titulo}
            </Typography>
            <Typography
              variant="subtitle"
              className='hg'
              sx={{
                padding: "8px 0",
                fontSize: "24px",
                fontWeight: "500",
                color: "#333333",
              }}
            >
              {subtitle}
            </Typography>
          </Grid2>
          <Grid2 item size={2} sx={{ display: activa1 ? "flex" : "none" }}>
            <Link href="/pe/soporte">Obtener Ayuda</Link>
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
            marginTop : '15px'
          }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid2
              container
              key={index}
              size={3}
              sx={{
                width: "358px",
                borderRadius: "25px",
                backgroundColor: "white",
                padding: "24px",
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
                  width: "222px",
                }}
              >
                <Typography variant="h3" className="inde">
                  {contenido[index]}
                </Typography>
                <Typography variant="subtitle2" className="ex">
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
                <Link href="#" className="flecha">
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

export default Ayuda