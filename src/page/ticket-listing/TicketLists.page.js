import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'
import SearchForm from '../../components/search-form/SearchForm.comp'
import TicketTable from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-ticket.json'

const TicketLists = () => {

  const[str, setStr] = useState('');
  const[dispTicket, setdispTicket] = useState(tickets);

useEffect(()=>{ }, [str, dispTicket]);

  const handleOnChange = (e) =>{
    const {value} = e.target;
    setStr(value);
    searchTicket(value);
  };
  const searchTicket = sttr =>{
    const displayTickets = tickets.filter(row=> row.Subject.toLowerCase().includes(sttr.toLowerCase()));
    
    
    setdispTicket(displayTickets);
  };
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket Lists" />
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Button variant='info'>Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
              <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
      <hr />
      <Row>
            <Col>
            <TicketTable tickets={dispTicket} />
            </Col>
        </Row>
    </Container>
  )
}

export default TicketLists
