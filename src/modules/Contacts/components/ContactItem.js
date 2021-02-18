import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {ButtonGroup, Button} from 'react-bootstrap'
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
const AccordionBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
`

const ContactItem = ({contactItem}) => {

  return (
    <>
    <ListGroup.Item key={contactItem.id}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b>{contactItem.colmenar} - {contactItem.name}, {contactItem.role}</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <AccordionBody>
                    <p>Número {contactItem.telephone}</p>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="warning">Editar</Button>
                      <Button variant="danger">Borrar</Button>
                    </ButtonGroup>
                </AccordionBody>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </ListGroup.Item>
    
    </>
  )
}

export default ContactItem;
