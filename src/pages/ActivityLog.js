import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ActivityLogTable from '../modules/Logs/components/ActivityLogTable'

// test objects
const travels = [
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
	}
];
const expenses = [
	{
		id:1,
		date:'02/01/2021',
		detail:'Clavos varios',
		totalCost:'$350',
		otherInfo:""
	},
	{
		id:2,
		date:'01/01/2021',
		detail:'1L esmalte blanco',
		totalCost:'$410',
		otherInfo:"" 
	},
];

const purchases = [
	{
		id:1,
		date:'02/01/2021',
		detail:'Clavos varios',
		totalCost:'$350',
		otherInfo:""
	},
	{
		id:2,
		date:'01/01/2021',
		detail:'1L esmalte blanco',
		totalCost:'$410',
		otherInfo:"" 
	},
];
const ActivityLog = () => {
	return (
		<div>
		<h2>Activity Log</h2>		
		<Tabs defaultActiveKey="travels" transition={false} >
			<Tab eventKey="travels" title="Viajes">
				<ActivityLogTable tableHeaders={['ID','Fecha','Colmenar','Motivo','Mas info']} data={travels} />
			</Tab>
			<Tab eventKey="expenses" title="Gastos">
				<ActivityLogTable tableHeaders={['ID','Fecha','Colmenar','Motivo','Mas info']} data={expenses} />
			</Tab>
			<Tab eventKey="purchasesOfMaterials" title="Compras de materiales">
				<div>hola33</div>
			</Tab>
		</Tabs>
		</div>
	)
}

export default ActivityLog;
