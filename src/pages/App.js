// import './App.css';
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ActivityLog from "../components/ActivityLog";
function App() {
  return (
    <div>
      <NavigationBar />
      <div className="bodyApp" >
        <ActivityLog />
      </div>
    </div>
  );
}

export default App;
