import React from 'react';
import { Table, Button } from 'react-bootstrap';

function InvoiceList({ invoices, setInvoices, setCurrentInvoice }) {
  const handleDelete = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  const handleEdit = (invoice) => {
    setCurrentInvoice(invoice);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Client</th>
          <th>Caissier</th>
          <th>Montant</th>
          <th>Perçu</th>
          <th>Rendu</th>
          <th>État</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(invoice => (
          <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.client}</td>
            <td>{invoice.caissier}</td>
            <td>{invoice.montant}</td>
            <td>{invoice.percu}</td>
            <td>{invoice.rendu}</td>
            <td>{invoice.etat}</td>
            <td>
              <Button variant="info" onClick={() => handleEdit(invoice)} className="mr-2">Modifier</Button>
              <Button variant="danger" onClick={() => handleDelete(invoice.id)}>Supprimer</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default InvoiceList;
