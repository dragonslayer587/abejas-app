import React from "react";
import Table from "react-bootstrap/Table";

// test object
const activityLogsData = [
	{
		id:1,
		date:'02/01/2021',
		colmenar:'TVE',
		motive:'Primer cosecha',
		otherInfo:""
	},
	{
		id:2,
		date:'01/01/2021',
		colmenar:'LAZ',
		motive:'Reponiendo materiales',
		otherInfo:"Hacia alta calor!"
	},
]

const ActivityLog = () => {
// function ActivityLog () {
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
				{activityLogsData.map(item => (
				<tr key={item.id}>
					<td>{ item.date}</td>
					<td>{ item.colmenar}</td>
					<td>{ item.motive}</td>
					<td>{ item.otherInfo}</td>
				</tr>
				))}
			</tbody>
		</Table>						
		</div>
	)
}

export default ActivityLog;
