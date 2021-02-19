import React from 'react';
import useContacts from '../modules/Contacts/hooks/useContacts';
import ContactList from "../modules/Contacts/components/ContactList";
import DeclarationTable from '../modules/Contacts/components/DeclarationTable';

import styled from 'styled-components';

const Row = styled.div`
  display:flex;
  justify-content: space-around;
`


const Contact = () => {
  const { contacts } = useContacts()

  return (
    <Row>    
      <div>
        <h2>Contactos</h2>

        <ContactList {...{contacts}} />
        {/* <ContactList contacts={contacts} /> */}
      </div>
      <div>
        <DeclarationTable />
        
      </div>
    </Row>
  )
}

export default Contact;