import { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { addRecipe } from "../services/api";

const AddRecipe = ({ isOpen, onRequestClose, onAddRecipe}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [preparation, setPreparation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      description,
      type,
      preparation,
    };
    onAddRecipe(newRecipe);
    setName("");
    setDescription("");
    setType("");
    setPreparation("");
    onRequestClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Agregar nueva Receta</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preparación:</label>
          <textarea
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Receta</button>
        <button type="button" onClick={onRequestClose}>
          Cerrar
        </button>
      </form>
    </Modal>
  );
};

//validar que los props sean del tipo correcto
addRecipe.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onAddRecipe: PropTypes.func.isRequired,
};

export default AddRecipe;
