import React, {Component,Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import './order.css';

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            pizzaId : props.location.state.pizza.pizzaId,
            pizzaSize:props.location.state.pizza.pizzaSize,
            pizzaQuantity:1,
            transactionMode:'Cash on Delivery only',
            couponName:null,
            customerId:sessionStorage.getItem('userId'),
            isHidden:true,


            errors:{}
        }
    } 
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.pizzaQuantity)
        {
            formIsValid = false
            errors['pizzaQuantity'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }

    order= (e) =>{
        e.preventDefault();
        if(this.validate()){

        
       
        let payload = {
            pizzaId : this.state.pizzaId,
            pizzaQuantity:this.state.pizzaQuantity,
            transactionMode:this.state.transactionMode,
            couponName:this.state.couponName,
            customerId:this.state.customerId

        }
        this.props.UserAction.orderPizza(payload);
    }
    }
        
      toggleHidden=(event)=>{
          event.preventDefault();
          var x=document.getElementsByClassName("cp")[0];
          if(x.style.display=="none"){
          x.style.display="block";
          this.props.UserAction.getCoupon();
          }else{
            x.style.display="none";

          }
          
      } 
    
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       
        
        return(
            <div class="order-pizza">
			    <h1>Order Pizza</h1>
				 <form >
				    
                    <div className="form-group">
					    <label>Enter Quantity</label>
						<input type="number" name="pizzaQuantity" className="form-control" value={this.state.pizzaQuantity} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
                        <div  className='errorMsg'>{this.state.errors.pizzaQuantity}</div><br></br>

                        <label>Enter CouponName</label>
						<input type="text" name="couponName" className="form-control" value={this.state.couponName} onChange={this.onChange}   style={{width:"200px",display:"inline-block"}}></input>
                        <br></br><button className="btn btn-success" style={{margin:"10px"}} onClick={this.toggleHidden}>View Coupon</button><br></br><br></br>

                        <div  class="cp" style={{display:'none'}}>

                        <table className="table table-striped table-bordered">
                    
                    <thead class="table-head">
                        <tr>
                            <th>Coupon Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody className="table-row">
                        {
                            this.props.allcoupon.map((coupon)=>
                                <tr key={coupon.couponId}>
                                   
                                   <td>{coupon.couponName}</td>
                                    <td>{coupon.couponDescription}</td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                        </div>
                        <label>TransactionMode</label>
						<input type="text" name="transactionMode" className="form-control" value={this.state.transactionMode} onChange={this.onChange}   style={{width:"200px",display:"inline-block"}} readOnly></input><br></br><br></br>
						
                        <button className="btn btn-success" onClick={this.order}><b>Order Now</b></button>
                        <Link to="/user"> <button className="btn btn-danger">Back</button></Link>
                </div>
					</form>
                   
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
    //    editdept : state.DepartmentReducer.editdept,
    allcoupon:state.UserReducer.allcoupon

       };
   }
   function mapDispatchToProps(dispatch){
    return {
        UserAction : bindActionCreators(UserAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(Order);