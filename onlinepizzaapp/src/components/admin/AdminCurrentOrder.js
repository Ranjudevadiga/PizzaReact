import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as AdminAction from '../../store/actions/AdminAction';
import {bindActionCreators} from 'redux';
import '../user/order.css'

class AdminCurrentOrder extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem("adminId")==undefined)
        {
           
            window.location.href="/";
        }
    }

    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/login";
    }
    acceptOrder(bookingOrderId){
        if(window.confirm('Are you sure you want to accept the order?')){
            this.props.AdminAction.acceptOrder(bookingOrderId);
        }
        else{
            window.location.href="/ordermanage"
        }
       

    }
    cancelOrder(bookingOrderId){
        if(window.confirm('Are you sure you want to cancel the order?')){
            this.props.AdminAction.cancelOrder(bookingOrderId);
        }
        else{
            window.location.href="/ordermanage"
        }
    }
    deliverOrder(bookingOrderId){
        if(window.confirm('Are you sure you want to change the status to deliver?')){
            this.props.AdminAction.deliverOrder(bookingOrderId);
        }
        else{
            window.location.href="/ordermanage"
        }
    }
    componentDidMount(){
        this.props.AdminAction.getAdminCurrentOrders();
    }
    
render(){
    
   return(
       <body>
    
    <div class="order-display">
    <Link to="/admin"> <button style={{marginLeft:"5px"}} className="btn btn-warning">Back</button></Link>

    <Link to="/adminallorder"> <button className="btn btn-danger pull-right">Orders</button></Link> 
                <h2 align="center">Active Order</h2>
              
                <table className="table table-striped table-bordered">
                    
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Pizza Name</th>
                            <th>Pizza Quantity</th>
                            <th>Pizza Size</th>
                            
                            <th>Total Cost</th>
                            <th>Transation Mode</th>
                            <th>Status</th>
                            <th>Option</th>
                            <th>Option</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.adcurrentOrder.map((order)=>
                                <tr key={order.bookingOrderId}>
                                    <td>{order.customer.customerName}</td>
                                    <td>{order.pizza.pizzaName}</td>
                                   <td>{order.pizzaQuantity}</td>
                                    <td>{order.pizzaSize}</td>
                                    
                                    <td>{order.totalCost}</td>
                                    <td>{order.transactionMode}</td>
                                    <td>{order.status}</td>
                                    <td>
                                         <button style={{marginLeft:"5px"}} type="button" className="btn btn-success btn-sm" onClick={()=>this.acceptOrder(order.bookingOrderId)}><span className="glyphicon glyphicon-edit"></span>Accept</button>
                                     
                                    </td> 
                                    <td><button className="btn btn-danger" onClick={()=>this.cancelOrder(order.bookingOrderId)}>
                                    <i className="fa fa-trash" aria-hidden="true"></i> Cancel</button></td>
                                    <td>
                                         <button style={{marginLeft:"5px"}} type="button" className="btn btn-success btn-sm" onClick={()=>this.deliverOrder(order.bookingOrderId)}><span className="glyphicon glyphicon-edit"></span>Delivered</button>
                                     
                                    </td> 
                                     
                                </tr>
                            )
                        }
                    </tbody>
                </table>
               
            </div>
        </body>
        
    );
}
}

function mapStateToProps(state) {
    return {
        login : state.LoginReducer.login,
        adcurrentOrder:state.AdminReducer.adcurrentOrder

    };
}
function mapDispatchToProps(dispatch){
    return{
       
       AdminAction: bindActionCreators(AdminAction,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (AdminCurrentOrder);
