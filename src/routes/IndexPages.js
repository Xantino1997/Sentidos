import React, { useState, useEffect } from "react";
import "../styles/IndexPages.css";
import carrousel1 from "../assets/carrousel1.png";
import carrousel2 from "../assets/carrousel2.png";
import carrousel3 from "../assets/carrousel3.png";
import { Link } from "react-router-dom";

function IndexPages() {
  const images = [
    { src: carrousel1, title: "Informamos", description: "Informamos" },
    { src: carrousel2, title: "Difundimos", description: "Difundimos" },
    { src: carrousel3, title: "Comprometidos", description: "Comprometidos" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="carousel-index">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item-index ${index === currentImageIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <div className="carousel-content">
              <h5 className="carousel-content-description">{image.description}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="right-div">
        <div className="sub-div red">
          <h1>Videos e Imgenes</h1>
          <p>Conoce Nuestra Comunidad</p>
          <Link to="/videos" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div blue">
          <h1>Profesionales de Salud</h1>
          <p>Compromiso cada vez mayor</p>
          <Link to="/profesionales" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div green">
          <h1>Post y Encuentros</h1>
          <p>Conoce los Post y Eventos de Sentidos</p>
          <Link to="/post" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div yellow">
          <h1>Contactanos por Redes</h1>
          <p>Escribinos</p>
          <Link to="/contactanos" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div orange">
          <h1>Mision y Objetivos</h1>
          <p>Asociacion Sentidos</p>
          <Link to="/testimoniales" className="btn-div">
            Ver Más
          </Link>
        </div>
        <div className="sub-div purple">
          <h1>Quienes Somos </h1>
          <p>Conocenos mas de cerca</p>
          <Link to="/nosotros" className="btn-div">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexPages;
