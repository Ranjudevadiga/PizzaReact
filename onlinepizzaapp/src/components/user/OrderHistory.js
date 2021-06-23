import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {AppBar, Toolbar,Typography,MenuItem,Menu,Button} from '@material-ui/core';

class OrderHistory extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/login";
        }
    }

    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/";
    }
    componentDidMount(){
        this.props.UserAction.viewOrderHistory();
    }
    
    
  
render(){
    
   return(
       <body>
    
    <div class="order-display">
    <div>
                <AppBar position="static">
                    <Toolbar >
                    <Typography variant="h4" edge="start">Welcome {sessionStorage.getItem("username")}</Typography>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                         {(popupState) => (
                        <React.Fragment>
                        <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                              <h5>Account Settings</h5>
                        </Button>
                         <Menu {...bindMenu(popupState)}>
                         <Link to="/userprofile"><MenuItem ><h5>PROFILE</h5></MenuItem></Link>
                         <MenuItem onClick={this.logout}><h5>LOGOUT</h5></MenuItem>
                        </Menu>
                        </React.Fragment>
                         )}
                    </PopupState>
                    </Toolbar>
                </AppBar>
                </div>
    
                
                <h2 align="center">Order List</h2>
              
                <table className="table table-striped table-bordered">
                    
                    <thead>
                        <tr>
                        <th>id</th>
                            <th>Pizza Name</th>
                            <th>Pizza Quantity</th>
                            <th>Total Cost</th>
                            <th>Option</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.allorder.map((order)=>
                                <tr key={order.bookingOrderId}>
                                    <td>{order.bookingOrderId}</td>
                                    
                                    <td>{order.pizza.pizzaName}</td>
                                   <td>{order.pizzaQuantity}</td>
                                    <td>{order.totalCost}</td>
                                    <td>
                                    <Link to ={`/vieworderbyid/${order.bookingOrderId}`}> <button style={{marginLeft:"5px"}} type="button" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-edit"></span>View Details</button></Link>

                                    </td>
                                   
                                     
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
            <Link to="/user"> <button style={{marginLeft:"5px"}} className="btn btn-warning">Back</button></Link>
        </body>
        
    );
}
}

function mapStateToProps(state) {
    return {
        login : state.LoginReducer.login,
        allorder:state.UserReducer.allorder

    };
}
function mapDispatchToProps(dispatch){
    return{
       
       UserAction: bindActionCreators(UserAction,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (OrderHistory);
