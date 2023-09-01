import React from "react";
import "../styles/MissionComponent.css"; // Asegúrate de tener un archivo CSS para este componente
import flap1 from "../assets/carrousel1.png";
import flap2 from "../assets/carrousel2.png";

const MissionComponent = () => {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h2>
          Misión de Sentidos - Asociación de Niños con Fisura Labio Leporino
        </h2>
        <p>
          Nuestra misión en Sentidos es brindar apoyo integral a niños que nacen
          con fisura labio leporino, asegurando que tengan acceso a atención
          médica de calidad, terapias especializadas y el amor necesario para
          crecer y desarrollarse plenamente. Trabajamos incansablemente como una
          ONG sin fines de lucro para crear oportunidades que permitan a estos
          niños llevar una vida plena y feliz.
        </p>
        <img
          className="images-container"
          src={flap1}
          alt="Niños con fisura labio leporino"
        />
        <img
          className="images-container"
          src={flap2}
          alt="Terapias y apoyo médico"
        />
      </div>
    </div>
  );
};

export default MissionComponent;
