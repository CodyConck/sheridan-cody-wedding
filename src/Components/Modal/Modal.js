import './Modal.css';

import React from 'react';

function Modal({ setGuest, guest }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setGuest(false)}> X </button>
        </div>
        <div className="title">
          <h1>RSVP</h1>
        </div>
        <div className="body">
          <div><p>Is This You?</p>
          <div>{guest.firstName} {guest.lastName}</div> 
          <div>{guest.address}</div> 
          {/* <pre>{JSON.stringify(guest, null, 2)}</pre> */}
          </div>
          </div>
        <div className="footer">
          <button>Yes</button>
          <button onClick={() => setGuest(false)} id="cancelBtn">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
