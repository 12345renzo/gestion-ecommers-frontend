import Especial from '@/components/Especial';
import { Typography } from '@mui/material';
import estilo from "../../../../css/Registrar.module.css";
import React from 'react'
import CardImg from '@/components/CardImg';

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
    "/scan.svg",
    "/qr.svg",
    "/write.svg",
    "/reward.svg",
  ];
  const contenido = [
    "Información de garantía",
    "Consejos sobre productos",
    "Soporte & Servicio",
    "Promoción exclusiva",
  ];
  const conten = [
    "Verificar la propiedad para obtener un servicio de garantía eficiente.",
    "Obtén información sobre el mantenimiento del producto, actualizaciones importantes y consejos útiles.",
    "Soporte y servicios para tus problemas.",
    "Recibir novedades sobre lanzamientos, ofertas especiales, concursos y más.",
  ];
  const imag = ["/register.avif","/whyregister.jpg","/register3.avif","/register4.avif"];

  return (
    <div>
      <div className={estilo.cabecera}>
        <Typography
          variant="h4"
          className={estilo.titulo}
          sx={{ fontSize: "56px", fontWeight: "600", marginBottom: "10px" }}
        >
          Registra tu producto
        </Typography>
        <Typography variant="subtitle1" className={estilo.parte}>
          Si eres miembro, podemos brindarte ayuda según tu producto, inicia
          sesión para obtener más información.
        </Typography>
      </div>
      <CardImg titulo="Por qué registrarme" activa1={true} contenido={contenido} content={conten} imagen={imag} />
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