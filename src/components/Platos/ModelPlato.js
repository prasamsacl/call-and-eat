import React from "react";

const ModalPlato = ({ plato, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{plato.nombre}</h2>
        <p>Descripción: {plato.descripcion}</p>
        <p>Alergenos: {plato.alergenos}</p>
      </div>
    </div>
  );
};

export default ModalPlato;
