import React from 'react';

function Invoice({ invoice, onDelete, onEdit, onShow }) {
  return (
    <tr>
      <td>{invoice.description}</td>
      <td>{invoice.amount}</td>
      <td>
        <button onClick={() => onShow(invoice)}>Show</button>
        <button onClick={() => onEdit(invoice)}>Edit</button>
        <button onClick={() => onDelete(invoice.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Invoice;
