import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Select, Radio } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';

const initialState={
    customerName :'',
    customerMobile :'',
    customerEmail :'',
    customerAddress :'',
    password :''
}
class UpdateCustomer extends Component {
    state=initialState;
    constructor(props){
        super(props)
        this.state = {
            customerId :props.location.state.customer.customerId,
            customerName : props.location.state.customer.customerName,
            role: props.location.state.customer.role,
            customerMobile : props.location.state.customer.customerMobile,
            customerEmail:props.location.state.customer.customerEmail,
            customerAddress:props.location.state.customer.customerAddress,
            password:props.location.state.customer.password,
            errors: {}
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updateCustomer= (e) =>{
        e.preventDefault();
        if (this.validateForm()) {
        let payload = {
            customerId: this.state.customerId,
            customerName: this.state.customerName,
            role: this.state.role,
            customerMobile : this.state.customerMobile,
            customerEmail:this.state.customerEmail,
            customerAddress:this.state.customerAddress,
            password:this.state.password
           
        }
        this.props.UserAction.updateCustomer(payload);
        this.setState(initialState);
        this.props.history.push("/user");
    }
    }
    validateForm = () => {
        let errors = {}
        let formIsValid = true
      if(!this.state.customerName) {
          formIsValid = false
          errors['customerName'] = '*Please enter your name'
        }
       else  if(!this.state.customerName.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors['customerName'] = '*Please Enter Only Alphabets ';
        }     
         
        
        if (!this.state.customerEmail) {
            formIsValid = false
            errors['customerEmail'] = '*Please enter your EmailId'
        }
        else if(!/\S+@\S+\.\S+/.test(this.state.customerEmail)){
            formIsValid = false
            errors['customerEmail'] = '*Please enter valid EmailId'
        }
        if (!this.state.password) {
            formIsValid = false
            errors['password'] = '*Please enter your password'
        }
        else if(this.state.password.length<6 ){
           
            formIsValid=false
            errors['password']='*Password length must be above 6 characters'
        }
       
        if (!this.state.customerMobile) {
            formIsValid = false
            errors['customerMobile'] = '*Please enter your mobile'
        }
        else if(this.state.customerMobile.length!=10 ){
           
            formIsValid=false
            errors['customerMobile']='*Mobile number length must be 10 characters'
        }
        if (!this.state.customerAddress) {
            formIsValid = false
            errors['customerAddress'] = '*Please enter your Address'
        }
        
       
        this.setState({ errors })
        return formIsValid
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let login= this.props.login;
        return(
            <div>
               
        
                <div className="addplant"  style={{ padding: 16, margin: 'auto', maxWidth: 400 }}>
                    <CssBaseline/>
				 <form >
                 <Typography variant="h4" align="center" component="h1" gutterBottom>Update Customer</Typography>
                 <Paper style={{ padding: 16 }}>
                        <label style={{fontSize:15}} >Enter  Name</label>
                        <div><input type="text" name="customerName" className="form-control" value={this.state.customerName} onChange={this.onChange} required></input><br></br>
                        <div  className='errorMsg'><h6>{this.state.errors.customerName}</h6></div></div> 
                        <label style={{fontSize:15}}>Enter Mobile Number</label>
                        <div><input type="text" name="customerMobile" className="form-control" value={this.state.customerMobile} onChange={this.onChange} required></input><br></br>
                        <div  className='errorMsg'><h6>{this.state.errors.customerMobile}</h6></div></div>
                         <label style={{fontSize:15}}>Enter Email </label>
                        <div><input type="text" name="customerEmail" className="form-control" value={this.state.customerEmail} onChange={this.onChange} required></input><br></br>
                        <div  className='errorMsg'><h6>{this.state.errors.customerEmail}</h6></div></div>
                        <label style={{fontSize:15}}>Enter Address </label>
                        <div><input type="text" name="customerAddress" className="form-control" value={this.state.customerAddress} onChange={this.onChange} required></input><br></br>
                        <div  className='errorMsg'><h6>{this.state.errors.customerAddress}</h6></div></div>
                        <label style={{fontSize:15}}>Enter Password </label>
                        <div><input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required></input><br></br>
                        <div  className='errorMsg'><h6>{this.state.errors.password}</h6></div></div>
						<button className="btn btn-success" onClick={this.updateCustomer}>Update</button>
                        <Link to="/userprofile"> <button className="btn btn-default">Cancel</button></Link>
                        </Paper> 
					</form> 
                    </div>
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       updatecustomer : state.UserReducer.updatecustomer,
       customer :state.UserReducer.customer,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        UserAction : bindActionCreators(UserAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateCustomer);