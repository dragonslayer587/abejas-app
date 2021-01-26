import React from "react";
import Table from  "react-bootstrap/Table";

// const activityLogObj = {
//     date:'02-02-2020',
//     colmenar:'TVE',
//     motive:'revision Invierno'
// }

// function eventLog ( ){
// 	this.date = Date('01/01/2020')
// }

// const activityLogs = [
// 	{

// 	}
// ]

function ActivityLog (props) {
	return (
		<div>
		<h2>Activity Log</h2>
		<Table striped bordered hover>
			<thead>
				<tr>
				<th>Fecha</th>
				<th>Colmenar</th>
				<th>Motivo</th>
				<th>Mas info</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
				</tr>
			</tbody>
		</Table>
		</div>
	)
}

export default ActivityLog;
