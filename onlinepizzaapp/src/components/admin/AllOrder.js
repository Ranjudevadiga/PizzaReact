import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as AdminAction from '../../store/actions/AdminAction';
import {bindActionCreators} from 'redux';
import '../user/order.css'

class AllOrder extends Component{
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
    
    
    componentDidMount(){
        this.props.AdminAction.getAllOrder();
        
    }
    
render(){
   
   return(
       <body>
    
    <div class="order-display">
    <Link to="/ordermanage"> <button style={{marginLeft:"5px"}} className="btn btn-warning">Back</button></Link>

   
                <h2 align="center">Customer Orders</h2>
              
                <table className="table table-striped table-bordered">
                    
                    <thead>
                        <tr>
                             {/* <th>Customer Name</th> 
                            <th>Pizza Name</th> */}
                            <th>Pizza Quantity</th>
                            <th>Pizza Size</th>
                            
                            <th>Total Cost</th>
                            <th>Transation Mode</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.allorder.map((order)=>
                                <tr key={order.bookingOrderId}>
                                    {/* <td>{order.customer.customerId}</td>
                                    <td>{order.pizza.pizzaId}</td> */}
                                    <td>{order.pizzaQuantity}</td>
                                    <td>{order.pizzaSize}</td>
                                    
                                    <td>{order.totalCost}</td>
                                    <td>{order.transactionMode}</td>
                                    <td>{order.status}</td>
                                   
                                     
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
        allorder:state.AdminReducer.allorder

    };
}
function mapDispatchToProps(dispatch){
    return{
       
       AdminAction: bindActionCreators(AdminAction,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (AllOrder);
