import './Modal.css';

import React, {useState} from 'react';


function ModalOne({ setGuest, guest }) {
  
  // const [confirmGuest, setConfirmGuest] = useState(false);

  // const yesClickHandler = (event) => {
  //   console.log('yes button clicked')
  // }

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
          {/* <h1>{confirmGuest}</h1> */}
          <button onClick={() => setGuest(true)} id="confirmBtn">Yes</button>
          <button onClick={() => setGuest(false)} id="cancelBtn">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalOne;
