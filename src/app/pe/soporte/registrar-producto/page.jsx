import Especial from '@/components/Especial';
import { Typography } from '@mui/material';
import React from 'react'

function page() {
  {/*parte del especial */}
  const titulos = ["1. Registrarse", "2. Ingresa tu modelo", "3. Llena tu Informacion","4. Disfruta tus beneficios"];
const bodys = [
  "Debes iniciar sesión para registrar el producto.",
  "Si tienes un producto ThinQ, puedes seleccionar el producto automáticamente",
  "Soporte y servicio acelerados sobre preguntas y problemas.",
  "Puedes encontrar el producto registrado en la página de MyLG.",
];
const picture = [
  "/fota.svg",
  "/inquiry.svg",
  "/president.svg",
  "/feedback.svg",
];
  return (
    <div>
      <div className="">
        <Typography
          variant="h4"
          className=""
          sx={{ fontSize: "56px", fontWeight: "600", marginBottom: "10px" }}
        >
          Registra tu producto
        </Typography>
        <Typography variant="subtitle1" className="">
          Si eres miembro, podemos brindarte ayuda según tu producto, inicia
          sesión para obtener más información.
        </Typography>
      </div>
      <Especial
      titulo="Cómo funciona"
        contenido={titulos}
        content={bodys}
        imagen={picture}
        activa1={false}
        activa2={true}
        ruta={picture}
      />
    </div>
  );
}

export default page