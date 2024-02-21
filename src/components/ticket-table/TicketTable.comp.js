import React from 'react'
import { Table } from 'react-bootstrap'
import propTypes from 'prop-types'


const  TicketTable= ({tickets}) => {
  if(tickets.length)
  return (
    <Table striped bordered hover>
        <thead>
           <tr>
            <th>Sr.No</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
           </tr>
        </thead>
        <tbody>
           {tickets.length ? tickets.map((row)=>(
           <tr key={row.id}>
            <td>{row.id}</td>
            
            <td>{row.Subject}</td>
            <td>{row.status}</td>
            <td>{row.addedAt}</td>
            </tr>
           )) : (
           <tr>
                <td colSpan="4" className='text-center'>No ticket show</td>
            </tr>
        )}

        </tbody>
    </Table>
  );
};
TicketTable.propTypes = {
  tickets: propTypes.array.isRequired,
};

export default TicketTable
