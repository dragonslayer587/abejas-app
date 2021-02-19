import React from 'react';
import Table from 'react-bootstrap/Table';
const declarations = [ 
  { id:2, yearOfDeclaration:2020, dateDone:'21-07-2020', status: 'Approved'},
  { id:1, yearOfDeclaration:2019, dateDone:'11-06-2019', status: 'Approved'}
]
const DeclarationTable = () => {

  return (
    <>
    <h3>Declaraciones Juradas</h3>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Año</th>
          <th>Fecha realizada</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        { declarations.map(item => (
        <tr key={item.id}>
          <td>{ item.yearOfDeclaration}</td>
          <td>{ item.dateDone}</td>
          <td>{ item.status}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default DeclarationTable;
