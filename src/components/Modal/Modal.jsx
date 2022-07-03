import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";

export const Modal = ({ active, closeModal, modalUrl }) => {
  return (
    <div
      className={active ? "Overlay active" : "Overlay"}
      onClick={() => closeModal()}
    >
      <div
        className={active ? "Modal active" : "Modal"}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={modalUrl} alt={modalUrl} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalUrl: PropTypes.string.isRequired,
};
