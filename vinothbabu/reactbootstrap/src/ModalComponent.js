import React from 'react';

const ModalComponent = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalComponent;

