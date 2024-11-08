import Ayuda from '@/components/Ayuda';
import { Typography } from '@mui/material';
import estilo from '../../../../css/Contacto.module.css';
import React from 'react'
import Pregunta from '@/components/Pregunta';

function page() {
    const titulos = [
      "Soporte de pedidos",
      "Registra tu producto",
      "Soporte de producto",
      "Solucitud de Reparacion",
    ];
    const titulo = [
      "Soporte de pedidos",
      "Registra tu producto",
      "Soporte de producto",
      "Solucitud de Reparacion",
    ];
    const imagenes = ["/carro.svg", "/llave.svg", "/mas.svg", "/consu.svg"];
    const ruta = [
      "/pe/seguimiento",
      "/pe/soporte/contactos",
      "/pe/soporte/registrar-producto",
      "/pe/soporte/reparacion",
    ];
    const fecha = [
      "Lunes a Viernes de 7:00 am a 9:00 pm",
      "Sábado de 8:00 am a 3:00 pm",
      "Domingos/Feriado: Inactivo​",
    ];
    const aver = [true,false,false,true]
    const content = [
      "Puedes chatear con un representante de soporte de LG en tiempo real.",
      "Estamos en WhatsApp. Envía un mensaje de texto con nuestros expertos agregando nuestro número de teléfono +51 (1) 4180900",
      "Responderemos tus preguntas directamente.",
      "Estamos aquí para ayudarte. Perú:"
    ];
    const cont = [
      "",
      "Al continuar con esta conversación, aceptas nuestra Política de privacidad. ",
      "",
      "",
    ];
    const boton = [
      "Iniciar chat de servicio al cliente",
      "Ir a WhatsApp",
      "Mas informacion",
      "Llamar Aqui"
    ]
  return (
    <div>
      <div className={estilo.cabecera}>
        <Typography
          variant="h4"
          className={estilo.titulo}
          sx={{ fontSize: "56px", fontWeight: "600", marginBottom: "10px" }}
        >
          Contáctanos
        </Typography>
        <Typography variant="subtitle1" className={estilo.parte}>
          Para una asistencia mas rapida, nuestras opciones de autoservicios
          estan aqui.
        </Typography>
      </div>
      <Ayuda
        titulo="¿Necesitas Ayuda?"
        subtitle=""
        activa1={false}
        contenido={titulos}
        content={""}
        imagen={imagenes}
        ruta={ruta}
      />
      <Pregunta
        titulo="¿Tienes alguna pregunta?"
        contenido={titulo}
        content={content}
        imagen={imagenes}
        ruta={ruta}
        fecha={fecha}
        activa1 = {aver}
        cont = {cont}
        boton={boton}
      />
    </div>
  );
}

export default page