import React from 'react';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Modal from '../Components/Modal/Modal';

const RSVP = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div class="container-fluid" className="rsvp-style">
      <h1>You're Invited</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text className="input-text">
          First and last name on invitation
        </InputGroup.Text>
        <FormControl aria-label="First name" placeholder="First Name" />
        <FormControl aria-label="Last name" placeholder="Last Name" />
      </InputGroup>
      <>
        <Button
          as="input"
          type="submit"
          value="Submit"
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        />
        {openModal && <Modal closeModalProps={setOpenModal} />}
      </>
    </div>
  );
};

export default RSVP;
