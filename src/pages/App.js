import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Contact from './Contact';
import ActivityLog from '../components/ActivityLog';
import {useState} from 'react';

function routes(page) {
  switch (page) {
    case 'Logs':
      return <ActivityLog />  
    case 'Contacts':
      return <Contact />
    default:
      return null
  }
}

function App() {
  const [page, setPage] = useState('Logs')
  return (
    <div>
      <NavigationBar goToPage={setPage} />
      <div className="bodyApp" >
        {routes(page)}
      </div>
    </div>
  );
}

export default App;
