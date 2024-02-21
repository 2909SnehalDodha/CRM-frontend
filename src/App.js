import React from 'react';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard.page';
import Entry from './page/entry/Entry.page';
import AddTicket from './page/new-ticket/AddTicket.page';
import TicketLists from './page/ticket-listing/TicketLists.page';
import Ticket from './page/ticket/Ticket.page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
        <Route
            path="/"
            element={ <DefaultLayout> 
      
                </DefaultLayout>
              }>
          </Route>
          
          <Route exact path="/" element={<Entry />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-ticket" element={<AddTicket />} />
          <Route path="/tickets" element={<TicketLists />} />
          <Route path="/ticket/:tid" element={<Ticket />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
