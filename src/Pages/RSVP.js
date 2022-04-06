import React from 'react'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const RSVP = () => {
    return (
        <div class='container-fluid' className='rsvp-style'>
            <h1>You're Invited</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text>First and last name on invitation</InputGroup.Text>
                <FormControl aria-label="First name" />
                <FormControl aria-label="Last name" />
            </InputGroup>
            <>
                <Button as="input" type="submit" value="Submit" />{' '}
                
            </>
        </div>
    )
}

export default RSVP