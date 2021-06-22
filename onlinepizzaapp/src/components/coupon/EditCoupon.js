import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CouponAction from '../../store/actions/CouponAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


class EditCoupon extends Component {
    constructor(props){
        super(props)
        this.state = {
            couponId : props.location.state.coupon.couponId,
            couponName : props.location.state.coupon.couponName,
            couponDescription : props.location.state.coupon.couponDescription,
            discountValue : props.location.state.coupon.discountValue,
            pizzaId : props.location.state.coupon['pizza'].pizzaId
        }
        console.log("here",this.props.state);
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    editCoupon= (e) =>{
        e.preventDefault();
        let payload = {
            couponId : this.state.couponId,
            couponName : this.state.couponName,
            couponDescription : this.state.couponDescription,
            discountValue : this.state.discountValue,
            pizzaId : this.state.pizzaId
        }
        this.props.CouponAction.editcoupon(payload);
      this.props.history.push("/getallcoupon");
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       
        
        return(
            <div>
       <h1>Update Coupon </h1>
     <form >
        <div className="form-group">

                    <TextField
                    variant="outlined"
                    margin="normal"
                    type="number"
                    label="Coupon Id"
                    id="couponId"
                    name="couponId"
                    autoFocus
                    value={this.state.couponId}  
                    readOnly
                  /><br></br>

                     <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Name"
                    id="couponName"
                    name="couponName"
                    autoComplete="couponName"
                    color="primary"
                    autoFocus
                    value={this.state.couponName}  onChange={this.onChange}
                  /><br></br>

                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Descrption"
                    id="couponDescription"
                    name="couponDescription"
                    autoComplete="couponDescription"
                    autoFocus
                    value={this.state.couponDescription}  onChange={this.onChange}
                  /><br></br>

                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    type="number"
                    label="Discount Value"
                    id="discountValue"
                    name="discountValue"
                    autoComplete="discountValue"
                    color="primary"
                    autoFocus
                    value={this.state.discountValue}  onChange={this.onChange}
                  /><br></br>

                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    type="number"
                    label="Pizza ID"
                    id="pizzaId"
                    name="pizzaId"
                    autoComplete="pizzaId"
                    color="primary"
                    autoFocus
                    value={this.state.pizzaId}  onChange={this.onChange}
                  /><br></br>

           </div>
      <Button variant="contained" color="primary" onClick={this.editCoupon}>update Coupon</Button>
            <Link to="/admin"> <Button variant="contained" color="secondary">Cancel</Button></Link> 
     </form> 
    </div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editcoupon : state.CouponReducer.editcoupon
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        CouponAction : bindActionCreators(CouponAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(EditCoupon);