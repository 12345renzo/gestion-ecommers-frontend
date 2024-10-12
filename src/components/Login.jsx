"use client";

import React from "react";
import "../css/login.css";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .min(15, "Usuario debe ser minimo de 15 digitos")
    .required("Email requerido"),
  password: yup
    .string("Ingresa su clave")
    .min(8, "Clave debe ser minimo de 8 digitos")
    .required("Clave requerido"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Login data", values);
    },
  });

  return (
    <div className="gen">
      <Grid2 container spacing={2}>
        {/* aki va la primera columna de datos */}
        <Grid2
          container
          size={6}
          spacing={0}
          sx={{
            "@media (max-width: 1250px)": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          {/* aki va la cabesera del iniciar secion*/}
          <Grid2 item size={12}>
            <Typography
              variant="h2"
              className="titu"
              sx={{ fontSize: "56px", fontWeight: "600" }}
            >
              Inicia sesión en tu cuenta LG
            </Typography>
            <Typography
              variant="subtitle1"
              className="subti"
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
          {/*aki va el formulario de la */}
          <Grid2 container size={12}>
            <form onSubmit={formik.handleSubmit} className="aki">
              <Box className="formulario">
                <Grid2 item size={12} sx={{ marginBottom: "30px" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      "@media (max-width: 460px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    Usuario
                  </Typography>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="Usuario (distingue mayúsculas de minúsculas)"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{
                      fontSize: "10px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "15px",
                      },
                      "& .MuiInputLabel-root": {
                        display: "none", // Oculta completamente el label
                      },
                    }}
                    inputProps={{
                      style: { fontSize: "15px" },
                    }}
                  />
                </Grid2>
                <Grid2 item size={12} sx={{ marginBottom: "30px" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      "@media (max-width: 460px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    placeholder="Contraseña (distingue mayúsculas de minúsculas)"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    sx={{
                      fontSize: "10px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "15px",
                      },
                      "& .MuiInputLabel-root": {
                        display: "none", // Oculta completamente el label
                      },
                    }}
                    inputProps={{
                      style: { fontSize: "15px" }, // Ajusta el tamaño del texto aquí
                    }}
                  />
                </Grid2>
                <Grid2
                  item
                  size={12}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Link href="/pe/cambio" className="regis">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid2>
              </Box>
              <Grid2
                item
                size={12}
                sx={{
                  gap: "0.8rem",
                  marginTop: "35px",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "@media (max-width: 460px)": {
                    display: "grid",
                    flexDirection: "column",
                    width: "100%",
                  },
                }}
              >
                <Button type="submit" className="bts">
                  Iniciar Seción
                </Button>
                <Link href="/pe/registrar" className="regist">
                  Registrarse Ahora
                </Link>
              </Grid2>
            </form>
          </Grid2>
        </Grid2>

        {/* segunda columna de datos */}
        <Grid2
          container
          size={6}
          spacing={0}
          sx={{
            "@media (max-width: 1250px)": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          {/* aki va la cabesera del cuadro de abajo */}
          <Grid2 item size={12}>
            <Typography
              variant="h2"
              className="titu"
              sx={{ fontSize: "56px", fontWeight: "600" }}
            >
              Sé un Miembro LG
            </Typography>
            <Typography
              variant="subtitle1"
              className="subti"
              sx={{
                padding: "8px 0",
                fontSize: "24px",
                fontWeight: "500",
                color: "#333333",
              }}
            >
              Disfruta los beneficios de nuestra membresia LG gratis, encuentra
              descuentos y servicios exclusivos
            </Typography>
          </Grid2>

          {/* aki va el cuadreo con los titulos y subtitulos y imagen de cada celda */}
          <Box className="formu">
            <Grid2
              container
              size={12}
              sx={{
                paddingBottom: "5px",
                borderBottom: "1px #333333 solid",
              }}
            >
              <Grid2 item size={10}>
                <Typography
                  variant="h4"
                  className="dos"
                  sx={{
                    fontSize: "36px",
                    fontWeight: "300",
                  }}
                >
                  Hasta 12 coutas SIN INTERESES
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="doss"
                  sx={{
                    padding: "8px 0",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  Disponible para tarjetas de crédito Interbank, BBVA, Diners y
                  BCP Visa. Cuotas disponibles varían entre 3, 6, 9 y 12 cuotas
                  según producto.
                </Typography>
              </Grid2>
              <Grid2
                item
                size={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "@media (max-width: 450px)": {
                    display: "none", // Oculta en pantallas de 450px o menos
                  },
                }}
              >
                <Image
                  src="/primer.svg"
                  alt="logo"
                  width={70}
                  height={70}
                ></Image>
              </Grid2>
            </Grid2>
            <Grid2
              container
              size={12}
              sx={{
                paddingTop: "10px",
                paddingBottom: "5px",
                borderBottom: "1px #333333 solid",
              }}
            >
              <Grid2 item size={10}>
                <Typography
                  variant="h4"
                  className="dos"
                  sx={{ fontSize: "36px", fontWeight: "300" }}
                >
                  Descuentos Exclusivos
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="doss"
                  sx={{
                    padding: "8px 0",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  Obtén descuentos exclusivos de hasta 10% en la categoria(s)
                  seleccionada(s) del mes.
                </Typography>
              </Grid2>
              <Grid2
                item
                size={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "@media (max-width: 450px)": {
                    display: "none",
                  },
                }}
              >
                <Image
                  src="/segundo.svg"
                  alt="logo"
                  width={70}
                  height={70}
                ></Image>
              </Grid2>
            </Grid2>
            <Grid2
              container
              size={12}
              sx={{
                paddingTop: "10px",
              }}
            >
              <Grid2 item size={10}>
                <Typography
                  variant="h4"
                  className="dos"
                  sx={{ fontSize: "36px", fontWeight: "300" }}
                >
                  Envío e Instalación ​GRATUITA*
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="doss"
                  sx={{
                    padding: "8px 0",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  Disponible para toda nuestra zona de cobertura por compras
                  mayores a S/.1,499. Instalación sólo en productos
                  seleccionados.
                </Typography>
              </Grid2>
              <Grid2
                item
                size={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "@media (max-width: 450px)": {
                    display: "none", // Oculta en pantallas de 450px o menos
                  },
                }}
              >
                <Image
                  src="/tercero.svg"
                  alt="logo"
                  width={70}
                  height={70}
                ></Image>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Login;
