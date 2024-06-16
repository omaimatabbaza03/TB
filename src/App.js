import React, { useState } from 'react';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [invoices, setInvoices] = useState([]);
  const [currentInvoice, setCurrentInvoice] = useState(null);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-4">Liste des factures</h1>
          <InvoiceForm 
            invoices={invoices} 
            setInvoices={setInvoices} 
            currentInvoice={currentInvoice} 
            setCurrentInvoice={setCurrentInvoice} 
          />
          <InvoiceList 
            invoices={invoices} 
            setInvoices={setInvoices} 
            setCurrentInvoice={setCurrentInvoice} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
