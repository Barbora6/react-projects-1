import { useState } from "react";
import { Modal } from "./Modal";
import "./Modal.css";

export const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div className="button-wrapper">
      <button onClick={handleToggleModalPopup}>
        Otevřete hlavní stranu...
      </button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>Customized body</div>} />
      )}
    </div>
  );
};
