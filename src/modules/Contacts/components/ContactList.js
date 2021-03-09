import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ContactItem from "./ContactItem";

const ContactList = ({contacts}) => {
  return (
  <>
  <ListGroup>
    {contacts.map(contactItem => <ContactItem contactItem={contactItem}/>)}
  </ListGroup>
  </>
  )
}

export default ContactList;
