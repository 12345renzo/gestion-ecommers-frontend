import React from 'react'
import Login from '@/components/Login';
import Redes from '@/components/Redes';
import Ayuda from '@/components/Ayuda';

function page() {
  const titulos = ['Realizar seguimiento de mi pedido','Seguimiento de mi reparación','Registrar producto','Dar seguimiento a mi consulta'];
  const subtitulos = [
    "Informacion del pedido",
    "Seguimiento del estado de tu servicio",
    "Registrar tu producto te ayudará a obtener soporte más rápido",
    "Conoce el estado de tu consulta por correo electrónico y llámanos para saber el estado de tu cita.",
  ];
  const imagenes = ['/carro.svg','/llave.svg','/mas.svg','/consu.svg'];
  const ruta = [
    "/pe/seguimiento",
    "/pe/soporte/reparacion",
    "/pe/soporte/registrar-producto",
    "/pe/soporte/contactos",
  ];
  return (
    <div>
      <Login/>
      <Redes/>
      <Ayuda titulo="Estado de seguimiento" subtitle="" activa1={false} contenido={titulos} content={subtitulos} imagen={imagenes} ruta={ruta}/>
    </div>
  );
}

export default page;