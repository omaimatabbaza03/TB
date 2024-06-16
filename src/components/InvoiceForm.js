import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function InvoiceForm({ invoices, setInvoices, currentInvoice, setCurrentInvoice }) {
  const [invoice, setInvoice] = useState({ id: null, client: '', caissier: '', montant: 0, percu: 0, rendu: 0, etat: 'Payée' });

  useEffect(() => {
    if (currentInvoice) {
      setInvoice(currentInvoice);
    } else {
      setInvoice({ id: null, client: '', caissier: '', montant: 0, percu: 0, rendu: 0, etat: 'Payée' });
    }
  }, [currentInvoice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (invoice.id === null) {
      setInvoices([...invoices, { ...invoice, id: invoices.length + 1 }]);
    } else {
      setInvoices(invoices.map(inv => (inv.id === invoice.id ? invoice : inv)));
    }
    setInvoice({ id: null, client: '', caissier: '', montant: 0, percu: 0, rendu: 0, etat: 'Payée' });
    setCurrentInvoice(null);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="client">
        <Form.Label>Client</Form.Label>
        <Form.Control 
          type="text" 
          name="client" 
          value={invoice.client} 
          onChange={handleInputChange} 
          placeholder="Nom du client" 
        />
      </Form.Group>
      <Form.Group controlId="caissier">
        <Form.Label>Caissier</Form.Label>
        <Form.Control 
          type="text" 
          name="caissier" 
          value={invoice.caissier} 
          onChange={handleInputChange} 
          placeholder="Nom du caissier" 
        />
      </Form.Group>
      <Form.Group controlId="montant">
        <Form.Label>Montant</Form.Label>
        <Form.Control 
          type="number" 
          name="montant" 
          value={invoice.montant} 
          onChange={handleInputChange} 
          placeholder="Montant" 
        />
      </Form.Group>
      <Form.Group controlId="percu">
        <Form.Label>Perçu</Form.Label>
        <Form.Control 
          type="number" 
          name="percu" 
          value={invoice.percu} 
          onChange={handleInputChange} 
          placeholder="Montant perçu" 
        />
      </Form.Group>
      <Form.Group controlId="rendu">
        <Form.Label>Rendu</Form.Label>
        <Form.Control 
          type="number" 
          name="rendu" 
          value={invoice.rendu} 
          onChange={handleInputChange} 
          placeholder="Montant rendu" 
        />
      </Form.Group>
      <Form.Group controlId="etat">
        <Form.Label>État</Form.Label>
        <Form.Control 
          as="select" 
          name="etat" 
          value={invoice.etat} 
          onChange={handleInputChange} 
        >
          <option value="Payée">Payée</option>
          <option value="Non Payée">Non Payée</option>
          <option value="Annulée">Annulée</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        {invoice.id ? 'Mettre à jour' : 'Ajouter'}
      </Button>
    </Form>
  );
}

export default InvoiceForm;
