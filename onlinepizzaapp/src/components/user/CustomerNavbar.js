import React,{ Component,Redirect } from 'react';
import{Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class CustomerNavbar extends Component{
    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/";
    }
    render(){
    
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" className="colour-nav" style={{backgroundColor:'rgb(38, 4, 44)',width:'100%'}} >
  <Navbar.Brand style={{color:'white'}} >Omega</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end" style={{width:"95%"}}>
    <div class="dropdown">
                 <button style={{backgroundColor:'white', color:'rgb(38, 4, 44)' ,height:"40px",boxShadow:'0 6px 6px',width:'10rem'}}  type="button" id="menu1" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> Profile
                   <span class="caret"></span></button>
                    <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="menu1">
                        <Link to="/">
                      <li role="presentation" ><a role="menuitem"  onClick={this.logout} tabindex="0"style={{color:'black'}} onClick={this.logout} ><span className="glyphicon glyphicon-log-out" ></span> Logout</a></li><br></br>
                      </Link>
                      <Link to="/user">
                      <li role="presentation"><a role="menuitem"  tabindex="0" style={{color:'black'}}><span className="glyphicon glyphicon-home"></span> Home Page</a></li>
                      </Link>
                     
                        </ul>
               </div>
                 
   
      </Nav>
  </Navbar.Collapse>
</Navbar>
            
            </div>   
            
    
        );
    }
    
    
    }