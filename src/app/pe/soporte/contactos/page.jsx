import Ayuda from '@/components/Ayuda';
import { Typography } from '@mui/material';
import estilo from '../../../../css/Contacto.module.css';
import React from 'react'
import Pregunta from '@/components/Pregunta';
import Especial from '@/components/Especial';

function page() {
    {/*este son los datos del componente ayuda */}
    const titulos = [
      "Soporte de pedidos",
      "Registra tu producto",
      "Soporte de producto",
      "Solucitud de Reparacion",
    ];
    const imagenes = ["/order.svg", "/mas.svg", "/product.svg", "/llave.svg"];  
    const ruta = [
      "/pe/seguimiento",
      "/pe/soporte/contactos",
      "/pe/soporte/registrar-producto",
      "/pe/soporte/reparacion",
    ];

    {/*este son los datos del componente pregunta */}
    const titulo = [
      "Soporte de pedidos",
      "Registra tu producto",
      "Soporte de producto",
      "Solucitud de Reparacion",
    ];
    const imagen = ["/chat.svg","/whatsapp.svg","/email.svg","/call.svg"];
    const dire = [
      "https://api.whatsapp.com/send/?phone=5114180900&text&type=phone_number&app_absent=0",
      "https://api.whatsapp.com/send/?phone=5114180900&text&type=phone_number&app_absent=0",
      "/pe/soporte/contactos/email",
      "https://api.whatsapp.com/send/?phone=5114180900&text&type=phone_number&app_absent=0",
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

    {/*este son los datos del componente sespecial */}
    const titless = ["Cargar documento","Estado de la Consulta","Mensaje al Predidente de LG","Comparte tus Comentarios"];
    const bodys = ["Si te enviamos un número de caso, adjunta un archivo.","Nuestros expertos responderán dentro de 1 a 2 días, verifica tu estado aquí","Envíanos tus comentarios utilizando el siguiente formulario.","¿Cómo fue tu experiencia con nosotros? Comparte tus pensamientos y opinione"];
    const picture = ["/fota.svg","/inquiry.svg","/president.svg","/feedback.svg"];
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
        imagen={imagen}
        ruta={dire}
        fecha={fecha}
        activa1={aver}
        cont={cont}
        boton={boton}
      />
      <Especial
        titulo=""
        activa2={false}
        contenido={titless}
        content={bodys}
        imagen={picture}
        activa1 = {true}
        ruta={dire}
      />
    </div>
  );
}

export default page