import React from 'react'
import { PropTypes } from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label><br></br>
      <Form.Text>Please reply your message here or update the ticket</Form.Text>
      <Form.Control
      //name=""
      value={msg}
      onChange={handleOnChange}
       as='textarea'
      row='5'
      name='detail'/>
      <div className='text-right' mt='3' mb='3'>
      <Button variant='info' type='submit' >Reply
      </Button>
      </div>
      
    </Form>
  )
}
UpdateTicket.propType = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
};

export default UpdateTicket
