import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import { TextField, Select, Radio} from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
  MenuItem,
  FormControl,
  RadioGroup,
  IconButton,
  FormControlLabel
} from '@material-ui/core';


import {Link} from 'react-router-dom';

const initialState={
    customerName :'',
    customerMobile :'',
    customerEmail :'',
    customerAddress :'',
    password :'',
    confirmpassword:''
}

class AddCustomer extends Component{
    state=initialState;
    constructor(props){
        super(props)
        this.state={
            customerName :'',
            role : 'user',
            customerMobile :'',
            customerEmail :'',
            customerAddress :'',
            password :'',
            confirmpassword:'',
            errors: {}
        }
        this.addNewCustomer =this.addNewCustomer.bind(this);
        
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
        else if( this.state.password !== this.state.confirmpassword ){
            formIsValid=false
            errors['password']='*Passwords dont match'
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
    addNewCustomer = (add)=> {
        add.preventDefault();
        /*const { password, confirmpassword } = this.state;
        // perform all neccassary validations
        if (password !== confirmpassword) {
            alert("Passwords don't match");
        } else {*/
            if (this.validateForm()) {
        let payload ={
            customerName:this.state.customerName,
            role :this.state.role,
            customerMobile:this.state.customerMobile,
            customerEmail:this.state.customerEmail,
            customerAddress:this.state.customerAddress,
            password:this.state.password
        }
        this.props.UserAction.addCustomer(payload);
        this.setState(initialState);
    }
        //}
}
    onChange =(obj) => this.setState({[obj.target.name] :obj.target.value});
    render(){
        return(
            <div>
                
               
        <div className="addplant"  style={{ padding: 16, margin: 'auto', maxWidth: 400 }}>
                    <CssBaseline/>
				 <form >
                 <Typography variant="h4" align="center" component="h1" gutterBottom>Register</Typography>
                 <Paper style={{ padding: 16 }}>
                    <div><input type="text" placeholder="Enter name" name="customerName" className="form-control" value={this.state.customerName} onChange={this.onChange}></input><br></br>
                    <div  className='errorMsg'><h6>{this.state.errors.customerName}</h6></div></div> 
                    <div><input type="text" placeholder="Enter customer mobile" name="customerMobile" className="form-control" value={this.state.customerMobile} onChange={this.onChange} required></input><br></br>
                    <div  className='errorMsg'><h6>{this.state.errors.customerMobile}</h6></div></div>
                    <div><input type="email" placeholder="Enter email" name="customerEmail" className="form-control" value={this.state.customerEmail} onChange={this.onChange} required></input><br></br>
                    <div  className='errorMsg'><h6>{this.state.errors.customerEmail}</h6></div></div>
                    <div><input type="text" placeholder="Enter address" name="customerAddress" className="form-control" value={this.state.customerAddress} onChange={this.onChange} required></input><br></br>
                    <div  className='errorMsg'><h6>{this.state.errors.customerAddress}</h6></div></div>
                    <div><input type="password" placeholder="Enter password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required></input><br></br>
                    <div  className='errorMsg'><h6>{this.state.errors.password}</h6></div></div>
                    <div><input type="confirmpassword" placeholder="Confirm password" name="confirmpassword" className="form-control" value={this.state.confirmpassword} onChange={this.onChange} required></input><br></br>
                    <div  className='errorMsg'><h6>{this.state.errors.confirmpassword}</h6></div></div>
                    <button className="btn btn-success" onClick={this.addNewCustomer}>Submit</button><br></br>
                <h5>Already have an account?<Link to={'/'}>Sign In</Link></h5>
                    </Paper> 
            </form>
            </div>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    return{
        addcustomer : state.UserReducer.addcustomer
    };
}
function mapDispatchToProps(dispatch){
    return{
        UserAction:bindActionCreators(UserAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddCustomer);
