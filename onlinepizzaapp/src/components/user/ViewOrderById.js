import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
class ViewOrderById extends Component{
    componentDidMount(){
        const{UserAction,match}=this.props;
        UserAction.viewHistoryById(match.params.id);
    }


render(){
    let order=this.props.orderbyid;
    
    return(
        <body>
     
     <div class="order-display">
     <Link to="/allorder"> <button style={{marginLeft:"5px"}} className="btn btn-warning">Back</button></Link>
                 
                 <h2 align="center"></h2>
               
                 <table className="table table-striped table-bordered">
                     
                     <thead>
                         <tr>
                            
                             <th>Pizza Quantity</th>
                             
                             <th>Total Cost</th>
                             <th>Date Of Order</th>
                             <th>Pizza Size</th>
                             
                             <th>Transation Mode </th>
                             <th>Status</th>



                             
                             
                         </tr>
                     </thead>
                     <tbody>
                         {
                                     <tr key={order.bookingOrderId}>
                                    
                                    <td>{order.pizzaQuantity}</td>
                                     
                                     <td>{order.totalCost}</td>
                                     <td>{order.dateOfOrder}</td>
                                     <td>{order.pizzaSize}</td>
                                     
                                     <td>{order.transactionMode}</td>
                                     <td>{order.status}</td>
                                    
                                    
                                      
                                 </tr>
                             
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
         orderbyid:state.UserReducer.orderbyid
 
     };
 }
 function mapDispatchToProps(dispatch){
     return{
        
        UserAction: bindActionCreators(UserAction,dispatch)
     };
 }

 export default connect(mapStateToProps,mapDispatchToProps) (ViewOrderById);
 

