import React, { useState } from "react";
import "../styles/Testimoniales.css";
import familia1 from "../assets/familia1.png";
import familia2 from "../assets/familia2.png";
import familia3 from "../assets/familia3.png";
import familia4 from "../assets/familia4.png";
import familia5 from "../assets/familia5.png";
import familia6 from "../assets/familia6.png";


  const Testimoniales = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedMiembro, setSelectedMiembro] = useState(null);
  
    const miembros = [
      {
        nombre: "Familia Samuel",
        imagen: familia1,
        info: "Nos transmite tranquilidad ver que lo que nos da la gente de sentidos en cuanto a trabajo sosten es algo que te hace compartir el problema y un problema a medias es mas llevadero",
        color:'#60f736 ',
  
      },
      {
        nombre: "Camilo y Benja",
        imagen: familia2,
        info: "Ver que tu hijo se siente querido y apreciado te devuelve la luz del dia",
        color: "lightblue",
      },
      {
        nombre: "Gerardo y Ana",
        imagen: familia3,
        info: "A veces solo que algun amigo te de un abrazo y te diga lo bien que estas siendo padre es lo que necesitas para recargar las pilas por los chicos",
        color:'#eb4034',
  
      },
      {
        nombre: "Familia Coingel",
        imagen: familia4,
        info: "Encontrar en un mundo tan veritginoso y egoista una persona que empatiza y te entiende es un privilegio en este grupo de personas",
        color:'#f7ee36',
  
      },
      {
        nombre: "Andrew y Teo",
        imagen: familia5,
        info: "No entenderme y culparme es un pensamiento recurrente, pero saber que contas con alguien mas que te dice lo estas haciendo bien es un alivio para el dia a dia ",

        color:'#f78036'
  
  
      },
      {
        nombre: "July y Familia",
        imagen: familia6,
        info: "Me han ayudado a sopesar los campos que no entiendia,a veces es un mundo dificil y enconrara a personas empaticas y pares en cuanto a las vivencias nos alivia la carga ",
        color:'#b736f7',
  
      },
    ];
  
    const openModal = (miembro) => {
      setSelectedMiembro(miembro);
    };
  
    const closeModal = () => {
      setSelectedMiembro(null);
    };
  
  
    return (
      <div className="conteiner-teacher">
        {miembros.map((miembro, index) => (
          <div key={index} className="miembro" style={{ backgroundColor: miembro.color }}>
            <img className="img-teacher" src={miembro.imagen} alt={miembro.nombre} />
            <h3>{miembro.nombre}</h3>
            <button onClick={() => openModal(miembro)}>Saber más</button>
          </div>
        ))}
  
        {/* Modal */}
        {selectedMiembro && (
          <div className="modal-overlay">
            <div className="modal-testimonial">
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={selectedMiembro.imagen} alt={selectedMiembro.nombre} />
              <h3>{selectedMiembro.nombre}</h3>
              <p className="parrafo-info">
              {selectedMiembro.info}
              </p>
              <button className="btn-close" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Testimoniales;