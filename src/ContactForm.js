import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ContactForm(props) {
  const [contact, setContact] = useState({
    name: "", email: "", phone: ""
  })

  function handleChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.onContactAdded(contact)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName" className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={contact.name} onChange={handleChange} name="name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={contact.email} onChange={handleChange} name="email" />
      </Form.Group>
      <Form.Group controlId="formBasicPhone" className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" value={contact.phone} onChange={handleChange} name="phone" />
      </Form.Group>
      <Button type="submit">Add Contact</Button>
    </Form>
  )
}

export default ContactForm

