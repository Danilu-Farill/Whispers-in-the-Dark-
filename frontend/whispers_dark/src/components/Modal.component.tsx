import React from "react";
import ReactDom from 'react-dom';
import '../styles/Modal.css';

interface ModalProps {
  children: React.ReactNode;
}
function Modal({children}: ModalProps) {
  const modalRoot = document.getElementById('modal-index') as HTMLElement;
  return ReactDom.createPortal(
    <div className="modal-overlay" data-backdrop="static">
      <div className="modal-jsx modal-content"> {children} </div>,
    </div>,
    modalRoot,
  );
};

export { Modal };