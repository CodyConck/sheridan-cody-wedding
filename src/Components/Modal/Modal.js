import './Modal.css';

import React from 'react';

function Modal({ closeModalProps }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModalProps(false)}> X </button>
        </div>
        <div className="title">
          <h1>RSVP</h1>
        </div>
        <div className="body">
          <p>Is This You?</p>
        </div>
        <div className="footer">
          <button>Yes</button>
          <button onClick={() => closeModalProps(false)} id="cancelBtn">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
