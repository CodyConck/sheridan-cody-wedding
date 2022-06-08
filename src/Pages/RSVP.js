import React from 'react';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import api from '../lib/api';

import ModalOne from '../Components/Modal/isThisYouModal';
//import ModalTwo from '../Components/Modal/confirmationModal';

const RSVP = () => {
  const [guest, setGuest] = useState(false);
  const [values, setValues] = useState({ firstName: "", lastName: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues((values) => {
      return {
        ...values,
        [event.target.name]: event.target.value
      };
    });
  }

  const handleSubmit = (event) => {
    setErrors({})
    if (!values.firstName || !values.lastName) {
      setErrors({message:"First and Last name are required"})
      return
    }
    setLoading(true)
    const params = {
      firstName: { $regex: values.firstName, $options: 'i' },
      lastName: { $regex: values.lastName, $options: 'i' }
    };
    
    api.get("/guests", { params, mode: "cors" })
      .then(result => {
        setLoading(false)
        const guests = result.data
        const guest = guests[0]
        if (!guest) {
          setErrors({message:"No guest matches this search"})
        }
        setGuest(guest)
      })
      .catch(err => {
        setLoading(false)
        setErrors({message:err.message})
      })
  }

  return (
    <div class="container-fluid" className="rsvp-style">
      <h1>You're Invited</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text className="input-text">
          First and last name on invitation
        </InputGroup.Text>
        <FormControl onChange={handleChange} name="firstName" disabled={loading} value={values.firstName} aria-label="First name" placeholder="First Name" />
        <FormControl onChange={handleChange} name="lastName" disabled={loading} value={values.lastName} aria-label="Last name" placeholder="Last Name" />
      </InputGroup>
      <>
        <Button
          value="Submit"
          className="openModalBtn"
          disabled={loading}
          onClick={() => {
            handleSubmit();
          }}
        >Submit</Button>
        {guest && <ModalOne guest={guest} setGuest={setGuest} />}
        {/* {confirmGuest && <ModalTwo confirmGuest={confirmGuest} setConfirmGuest={setConfirmGuest} />}  */}
        {errors.message && <div className="text-danger">{errors.message}</div>}
      </>
    </div>
  );
};

export default RSVP;
