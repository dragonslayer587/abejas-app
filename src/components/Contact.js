import React from 'react';
import useContacts from '../modules/Contacts/hooks/useContacts';
import ContactList from "../modules/Contacts/components/ContactList";

const Contact = () => {
  const { contacts } = useContacts()

  return (
    <div>
      <h2>Contactos</h2>
      <ContactList {...{contacts}} />    
      {/* <ContactList contacts={contacts} /> */}
    </div>
  )
}

export default Contact;