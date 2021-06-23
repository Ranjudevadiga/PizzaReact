import React,{Component}from 'react';
import{connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {
    Typography,
    Paper,
    AppBar,
    Button,
    CssBaseline,
    MenuItem,
    Toolbar,
    Menu,
    FormControlLabel
  } from '@material-ui/core';

//import {Table} from 'react-bootstrap';

class GetById extends Component {  
    constructor(props){
        super(props)
        this.state={
            customerName :'',
            customerMobile :'',
            customerEmail :'',
            customerAddress :'',
        } 
    }  
    componentDidMount(){
        let login=this.props.login;
        this.props.UserAction.getcustomerbyid(sessionStorage.getItem("userId"));

    }
    logout(){
        window.location.href="/"
    }
    render(){
       let customer=this.props.customer;
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
                              <h5>Account Settings</h5>
                        </Button>
                         <Menu {...bindMenu(popupState)}>
                         <Link to ={{pathname: '/UpdateCustomer',state:{customer}}}><MenuItem><h5>UPDATE</h5></MenuItem></Link>
                         <Link to ={`/userprofile/${sessionStorage.getItem("userId")}`}><MenuItem><h5>DELETE</h5></MenuItem></Link>
                         <MenuItem onClick={this.logout}><h5>LOGOUT</h5></MenuItem>
                        </Menu>
                        </React.Fragment>
                         )}
                    </PopupState>
                    </Toolbar>
                </AppBar>
                </div>

               <div className="addplant"  style={{ padding: 16, margin: 'auto', maxWidth: 400 }}>
                    <CssBaseline/>
				 <form >
                 <Typography variant="h4" align="center" component="h1" gutterBottom>Profile</Typography>
                 <Paper style={{ padding: 16 }}>
                        <label style={{fontSize:15}} > Name</label>
                        <input type="text" name="customerName" className="form-control" value={customer.customerName} onChange={this.onChange} readOnly></input><br></br>
                        <label style={{fontSize:15}}>Mobile Number</label>
                        <input type="text" name="customerMobile" className="form-control" value={customer.customerMobile} onChange={this.onChange} readOnly></input><br></br>
                         <label style={{fontSize:15}}> Email </label>
                        <input type="text" name="customerEmail" className="form-control" value={customer.customerEmail} onChange={this.onChange} readOnly></input><br></br>
                        <label style={{fontSize:15}}> Address </label>
                        <input type="text" name="customerAddress" className="form-control" value={customer.customerAddress} onChange={this.onChange} readOnly></input><br></br>
                        <Link to="/user"><button className="btn btn=info">Back</button></Link>
                        </Paper> 
					</form> 
                    </div>
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
        UserAction :bindActionCreators(UserAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetById);