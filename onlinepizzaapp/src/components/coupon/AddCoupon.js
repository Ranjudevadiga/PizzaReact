import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CouponAction from '../../store/actions/CouponAction';
import {bindActionCreators} from 'redux';
import { Redirect } from 'react-router';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
 import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
       '& > *': {
         margin: theme.spacing(1),
         width: '25ch',
       },
     },
  }));

  class AddCoupon extends Component{
    constructor(props){
        super(props)
        this.state={
            couponName :'',
            couponDescription: '',
            discountValue :'',
            pizzaId :''

        }
        this.addNewCoupon =this.addNewCoupon.bind(this);
    }
    addNewCoupon = (add)=> {
        let payload ={
            couponName :this.state.couponName,
            couponDescription:this.state.couponDescription,
            discountValue:this.state.discountValue,
            pizzaId:this.state.pizzaId
        }
        this.props.CustomerAction.addCoupon(payload);
        add.preventDefault();
        this.props.history.push("/getallcoupon");
    }
    
    onChange =(obj) => this.setState({[obj.target.name] :obj.target.value});
    render(){

               
        return(
            <div>
            <h1>Add Coupon</h1>
            <form className={useStyles.root} Validate autoComplete="off" onSubmit={this.addNewCoupon}>
                <div className="form-group">
                

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Coupon NAME"
                    id="couponName"
                    name="couponName"
                    autoComplete="couponName"
                    autoFocus
                    value={this.state.couponName}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Coupon Description"
                    id="couponDescription"
                    name="couponDescription"
                    autoComplete="couponDescription"
                    autoFocus
                    value={this.state.couponDescription}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    type="number"
                    label="Discount Value"
                    id="discountValue"
                    name="discountValue"
                    autoComplete="discountValue"
                    autoFocus
                    value={this.state.discountValue}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    
                    type="number"
                    label="Pizza Id"
                    id="pizzaId"
                    name="pizzaId"
                    autoComplete="pizzaId"
                    autoFocus
                    value={this.state.pizzaId}  onChange={this.onChange}
                  /><br></br>
                   
                </div>
               
                <Button type="submit" variant="contained" color="primary" >
                    add</Button>
                   
                <React.Fragment>
                                   <Link to="/couponmanage"><Button variant="contained" color="secondary">
                                          BACK TO Coupon Section
                                </Button></Link> 
                                      </React.Fragment>
            </form>
        </div>
        ); 
    }
}
function mapStateToProps(state){
    return{
        addcoupon : state.CouponReducer.addcoupon
    };
}
function mapDispatchToProps(dispatch){
    return{
        CustomerAction:bindActionCreators(CouponAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddCoupon);

