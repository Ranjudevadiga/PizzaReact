import React, {Component,Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            pizzaId : props.location.state.pizza.pizzaId,
            pizzaSize:props.location.state.pizza.pizzaSize,
            pizzaQuantity:0,
            transactionMode:'',
            couponName:'',
            customerId:sessionStorage.getItem('userId')

            
        }
    } 
//     validate = () => {
//         let errors = {}
//         let formIsValid = true
//         if(!this.state.departmentName)
//         {
//             formIsValid = false
//             errors['departmentName'] = '*Please enter this field '
//         }
//         this.setState({ errors })
//         return formIsValid
//    }
  
    order= (e) =>{
        e.preventDefault();
       
        let payload = {
            pizzaId : this.state.pizzaId,
            pizzaQuantity:this.state.pizzaQuantity,
            transactionMode:this.state.transactionMode,
            couponName:this.state.couponName,
            customerId:this.state.customerId

        }
        this.props.UserAction.orderPizza(payload);
    }
        
       
    
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       
        
        return(
            <div class="container">
			    <h1>Order Pizza</h1>
				 <form >
				    
                    
					    <h5>Enter Quantity</h5>
						<input type="number" name="pizzaQuantity" className="form-control" value={this.state.pizzaQuantity} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						<h5>Enter CouponName</h5>
						<input type="text" name="couponName" className="form-control" value={this.state.couponName} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						
                        <h5>Enter transactionMode</h5>
						<input type="text" name="transactionMode" className="form-control" value={this.state.transactionMode} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						
                        <button className="btn btn-success" onClick={this.order}>Order Now</button>
                        <Link to="/user"> <button className="btn btn-warning">Back</button></Link>
					</form>
                   
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
    //    editdept : state.DepartmentReducer.editdept,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        UserAction : bindActionCreators(UserAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(Order);