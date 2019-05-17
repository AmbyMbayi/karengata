import React ,{ Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export default class Navbar extends Component{
    render(){
        return(
            <div>
            <header id="header">
            <div className="header-top">
              <div className="row">
                <div className="col-6 top-head-left">
                  <ul>
                   <li>t</li>
                  </ul>
                </div>
                <div className="col-6 top-head-right">
                  <ul>
                    <li className="nav-link">+2547 16402525</li>
                    
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="container">
              <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                  <Link><img src={Logo} alt="logo" title="logo"/></Link>
                </div>
                
                  <nav id="nav-menu-container">
                  <ul className="nav-menu">
                    <li>
                      <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                      <Link to={'/about'}>About</Link>
                    </li>
                    
                    <li>
                      <Link to={'/contact'} >Contact</Link>
                    </li>
                    
                  </ul>
                </nav>
              </div>
              
            </div>
          </header>

          

          
          
        
        </div>
        )
    }
}