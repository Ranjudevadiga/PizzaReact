import React,{Component}from 'react';
import{connect} from 'react-redux';
//import * as CustomerAction from '../../store/actions/CustomerAction';
import * as AdminAction from '../../store/actions/AdminAction';

import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar,Typography,MenuItem,Menu,Button} from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

//import {Table} from 'react-bootstrap';

class GetAllCustomer extends Component {    
    componentDidMount(){
        this.props.AdminAction.getcustomer()
    }
    backToAdmin(){
        window.location.href="/admin";
    }
    logout(){
        window.location.href="/"
    }
    render(){
        let stock =this.props.customer;
        let login=this.props.login;
        return(
            <div>
                 <div>
                <AppBar position="static">
                    <Toolbar >
                    <Typography variant="h4" edge="start">Welcome {sessionStorage.getItem("username")}</Typography>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                         {(popupState) => (
                        <React.Fragment>
                        <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                              <h5>Options</h5>
                        </Button>
                         <Menu {...bindMenu(popupState)}>
                         <MenuItem onClick={this.logout}><h5>LOGOUT</h5></MenuItem>
                        </Menu>
                        </React.Fragment>
                         )}
                    </PopupState>
                    </Toolbar>
                </AppBar>
                </div>
                
            <div className="box-details">
            <Typography variant="h4" align="center" component="h1" gutterBottom>Customer List</Typography>
                <table className="table table-bordered table-hover table-condensed">
                
                <thead className="head-style">
                    <tr>
                        <th className="th-customerId"><center>ID</center></th>
                        <th className="th-customerName"><center>NAME</center></th>
                        <th className="th-role"><center>ROLE</center></th>
                        <th className="th-customerMobile"><center>MOBILE NUMBER</center></th>
                        <th className="th-customerEmail"><center>EMAIL ADDRESS</center></th>
                        <th className="th-customerAddress"><center>ADDRESS</center></th>
                      
                    </tr>
                </thead>
                <tbody>
                    {
                       
                    stock.map(customer =>
                        (customer.role==='user')?
                        <tr key={customer.customerId}align="center">
                            <td>{customer.customerId}</td>
                            <td>{customer.customerName}</td>
                            <td>{customer.role}</td>
                            <td>{customer.customerMobile}</td>
                            <td>{customer.customerEmail}</td>
                            <td>{customer.customerAddress}</td>
                            
                        
                        </tr>:<tr></tr>
                        )}
                        </tbody>
                     </table> <br></br>
                     </div>
                     { (login !==undefined) &&(login.role==="admin")?
                                <React.Fragment>
                                    <Link to="/admin"><button className="btn btn-info">BACK TO ADMIN</button></Link>
                                </React.Fragment> :
                                  <React.Fragment>
                                      <Link to="/user"><button className="btn btn-info">BACK TO USER</button></Link>
                                      </React.Fragment>
                                      }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        customer : state.UserReducer.customer,
        login : state.LoginReducer.login
    };
}

function mapDispatchToProps(dispatch){
    return{
        AdminAction :bindActionCreators(AdminAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllCustomer);