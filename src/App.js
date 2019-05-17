import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
import Home from './components/pages/home.component';
import About from './components/pages/about.component';
import Contact from './components/pages/contact.component';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './utils/navbar.component';


class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
            
            <Switch>
            <Route exact path = '/' component={ Home }/>
            <Route path = '/about' component={ About }/>
            <Route path ='/contact' component={ Contact }/>
           
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;