import { useEffect, useState } from "react"

const contactsInfo = [
	{
		id:1,
		name:'Testing Name',
		role:'Capataz/Dueño',
		colmenar:'TVE',
    telephone:'123456789',
		otherInfo:""
	},
	{
		id:2,
		name:'Otro nombre',
		role:'Segundo al mando',
		colmenar:'LAZ',
    telephone:'123456789',
		otherInfo:""
	},
]

export default function useContacts() {
  const [ contacts, setContacts ] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setContacts(contactsInfo)
    }, 500);
  }, [])

  return {
    contacts
  }
}
