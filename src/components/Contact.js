import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {ButtonGroup, Button} from 'react-bootstrap'
// test object
const contactsInfo = [
	{
		id:1,
		name:'Monkey D. Luffy',
		role:'Capataz/Dueño',
		colmenar:'TVE',
    telephone:'123456789',
		otherInfo:""
	},
	{
		id:2,
		name:'Ronoroa Zoro',
		role:'Segundo al mando',
		colmenar:'LAZ',
    telephone:'123456789',
		otherInfo:""
	},
]

const Contact = () => {
  return (
    <div>
      <h2>Contactos</h2>
      <ListGroup>
        {contactsInfo.map(contactItem => (
          <ListGroup.Item key={contactItem.id}>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b>{contactItem.colmenar} - {contactItem.name}, {contactItem.role}</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                      <p>Número {contactItem.telephone}</p>
                      <ButtonGroup aria-label="Basic example">
                        <Button variant="warning">Editar</Button>
                        <Button variant="danger">Borrar</Button>
                      </ButtonGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </ListGroup.Item>
        ))}

      </ListGroup>

    </div>
  )
}

export default Contact;