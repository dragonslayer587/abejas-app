import React from "react";
import Table from "react-bootstrap/Table";

const ActivityLogTable = ({tableHeaders, data}) => {
  
  return (
    <>
		<Table striped bordered hover>
    <thead>
      <tr>
        {tableHeaders.map(element => (<th key={tableHeaders.indexOf(element)}>{element}</th>))}
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
      <tr key={item.id}>
        {Object.entries(item).map(property => (<td>{property[1]}</td>))}
      </tr>
      ))}
    </tbody>
  </Table>
  </>
  )
}

export default ActivityLogTable;