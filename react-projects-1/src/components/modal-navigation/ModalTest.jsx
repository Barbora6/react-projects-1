import { useState } from "react";
import { Modal } from "./Modal";
import "./Modal.css";

export const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  return (
    <div className="button-wrapper">
      <button onClick={handleToggleModalPopup}>
        Otevřete hlavní stranu...
      </button>
      {showModalPopup && <Modal body={<div>Customized body</div>} />}
    </div>
  );
};
