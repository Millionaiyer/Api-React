// Modal.js

import React from "react";

const Modal = ({ isModalOpen, isModalClose }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>hello world</h1>
        <button onClick={isModalClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
