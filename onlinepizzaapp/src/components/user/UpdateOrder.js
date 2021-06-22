import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
class UpdateOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
           
            pizzaName : props.location.state.order.pizza.pizzaName,
            pizzaQuantity : props.location.state.order.pizzaQuantity,
            pizzaSize : props.location.state.order.pizzaSize,
            totalCost : props.location.state.order.totalCost,
            bookingOrderId:props.location.state.order.bookingOrderId,
            pizzaId:props.location.state.order.pizza.pizzaId,
            errors:{}
           
        }
        
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/";
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
    componentDidMount(){
        console.log(this.props.location.state);
    }
    
    updateOrder= (e) =>{
        e.preventDefault();
        if(this.validate()){
        
            let payload = {
                
                pizzaQuantity : this.state.pizzaQuantity,
                bookingOrderId:this.state.bookingOrderId,
                pizzaId:this.state.pizzaId
                
            }
            if(window.confirm('Are you sure you want to update the order?')){
                this.props.UserAction.updateOrder(payload);
            }
        }
       
        
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let order = this.props.getCurrentOrders;
        console.log(order);
        return(
           <div class="order-pizza">
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-4">
                       <h1>Update  Order </h1>
                        <form >
                            <div className="form-group">
                               <label >Pizza Name</label>
                                  <input type="text" name="pizzaName" className="form-control" value={this.state.pizzaName} onChange={this.onChange}  readOnly></input><br></br>
                               <label>Enter Pizza Quantity</label>
                                  <input type="number" name="pizzaQuantity" className="form-control" value={this.state.pizzaQuantity} onChange={this.onChange}  required="required"></input><br></br>
                                  <div  className='errorMsg'>{this.state.errors.pizzaQuantity}</div><br></br>

                               <label>Pizza Size</label>
                                  <input type="text" name="pizzaSize" className="form-control" value={this.state.pizzaSize} onChange={this.onChange} readOnly></input><br></br>
                               <label>Total Cost</label>
                                  <input type="number" name="totalCost" className="form-control" value={this.state.totalCost} onChange={this.onChange} readOnly></input> <br></br>
                                  <button className="btn btn-success" onClick={this.updateOrder}>Update Order</button>
                         <Link to="/viewCurrentOrders"> <button className="btn btn-danger">Cancel</button></Link>  
                            </div>
                         
                        </form>
                    </div>
                </div> 
            </div>         
        );
    }
}
function mapStateToProps(state) {
    return {
       updateOrder : state.UserReducer.updateOrder,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     UserAction : bindActionCreators(UserAction, dispatch)
      };
   }
export default connect(mapStateToProps,mapDispatchToProps)(UpdateOrder);
