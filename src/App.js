import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
   
    </div>
  );
}

export default App;
