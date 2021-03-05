import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';

// Containers
import Layout from './containers/Layout';

// Pages
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ="/login" exact name="Login Page" render={props => <Login {...props}/>} />
        <Route path="/" name="Home" render={props => <Layout {...props}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
