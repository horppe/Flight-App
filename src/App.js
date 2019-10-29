import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
   
    </div>
  );
}

export default App;
