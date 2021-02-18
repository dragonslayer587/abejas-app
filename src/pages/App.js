import './App.css';
// import ActivityLog from "../components/ActivityLog";
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/Contact';
// import ActivityLog from '../components/ActivityLog';
// import {useState} from 'react';

function App() {
  // const [page, setPage] = useState('ActivityLog')

  return (
    <div>
      <NavigationBar />
      <div className="bodyApp" >
        {/* <button onClick={()=>{setPage()}} >boton 1 </button>
        <button>boton 2 </button> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
