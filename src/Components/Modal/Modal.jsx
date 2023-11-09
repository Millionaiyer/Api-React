// Modal.js

import React from "react";
import Form1 from "./Form/Form1";
// import Form2 from "./Form/Form2";

const Modal = ({ isModalOpen, isModalClose }) => {
  return (
    <div>
      <Form1 isModalOpen={isModalOpen} isModalClose={isModalClose} />
      {/* <Form2 isModalOpen={isModalOpen} isModalClose={isModalClose} /> */}
    </div>
  );
};

export default Modal;
