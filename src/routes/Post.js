import React, { useState } from "react";
import "../styles/Post.css"; // Asegúrate de tener tu archivo de estilos Eventos.css
import web from "../assets/familia6.png";
import android from "../assets/familia3.png";
import marketing from "../assets/familia4.png";
import maquina from "../assets/familia2.png";
import soldador from "../assets/familia1.png";

function Post() {
  const [eventos, setEventos] = useState([
    {
      id: 1,
      imagen: web,
      titulo: "Sentidos Asociacion",
      fecha: "Fecha 20-11-23",
      entradas: "A confirmar",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 2,
      imagen: android,
      titulo: "Como llevar el bullying",
      fecha: "Fecha 2",
      entradas: "Entradas 2",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 3,
      imagen: marketing,
      titulo: "Las Familas fuertes ",
      fecha: "Fecha 3",
      entradas: "Entradas 3",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 4 ,
      imagen: maquina,
      titulo: "Encuentro Flap",
      fecha: "Fecha 4 ",
      entradas: "Entradas 4 ",
      likes: 0,
      meEncanta: 0,
    },
    {
      id: 5,
      imagen: soldador,
      titulo: "Solidaridad",
      fecha: "Fecha 5",
      entradas: "Entradas 5",
      likes: 0,
      meEncanta: 0,
    },
    // Agrega más eventos aquí
  ]);

  const handleLike = (id) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === id ? { ...evento, likes: evento.likes + 1 } : evento
      )
    );
  };

  const handleMeEncanta = (id) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === id
          ? { ...evento, meEncanta: evento.meEncanta + 1 }
          : evento
      )
    );
  };

  return (
    <div className="conteiner-eventos">
      {eventos.map((evento) => (
        <div key={evento.id} className="evento">
          <div className="imagen-contenedor">
            <img
              src={evento.imagen}
              alt={`Evento ${evento.id}`}
              className="evento-imagen"
            />
            <div className="overlay">
              <button className="boton-mas">Ver mas</button>
              <button className="boton-mas">Inscribirte</button>
            </div>
            <div className="like-encanta">
              <div className="icono-like">
                <span role="img" aria-label="Like">
                  👍 {evento.likes}
                </span>
              </div>
              <div className="icono-me-encanta">
                <span role="img" aria-label="Me Encanta">
                  ❤️ {evento.meEncanta}
                </span>
              </div>
            </div>
          </div>
          <div className="evento-footer">
            <div className="evento-info">
              <p>Titulo: {evento.titulo}</p>
              <p>Fecha: {evento.fecha}</p>
              <p>Entradas: {evento.entradas}</p>
            </div>
            <div className="evento-acciones">
              <button
                className="like-button"
                onClick={() => handleLike(evento.id)}
              >
                Like
              </button>
              <button
                className="me-encanta-button"
                onClick={() => handleMeEncanta(evento.id)}
              >
                Me Encanta
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
