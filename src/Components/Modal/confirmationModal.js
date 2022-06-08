import './Modal.css';

import React from 'react';

function ModalTwo({ setGuest, guest }) {
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
                    <div><p>Welcome {guest.firstName}, will you be joining us?</p>
                        {/* <pre>{JSON.stringify(guest, null, 2)}</pre> */}
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => setGuest(true)} id="confirmBtn">Yes</button>
                    <button onClick={() => setGuest(false)} id="cancelBtn">No</button>
                </div>
            </div>
        </div>
    );
}

export default ModalTwo;