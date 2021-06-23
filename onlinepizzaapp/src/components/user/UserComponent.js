import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';
import './order.css'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {AppBar, Toolbar,Typography,MenuItem,Menu,Button} from '@material-ui/core';

class UserComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            pizzaType:'',
            min:0,
            max:0
        }
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/";
        }


    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }

    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/";
    }
    componentDidMount(){
        this.props.UserAction.getPizza();
    }
    sortByTypeVeg=(e)=>{
        e.preventDefault();
    

        this.props.UserAction.sortByType("veg");

    }
    sortByTypeNonVeg=(e)=>{
        e.preventDefault();
    

        this.props.UserAction.sortByType("non-veg");

    }
    sortByPrice=(e)=>{
        e.preventDefault();
        let payload={
            min:this.state.min,
            max:this.state.max
        }

        this.props.UserAction.sortByPrice(payload);

    }
    toggleHidden=(event)=>{
        event.preventDefault();
        var x=document.getElementsByClassName("containers")[0];
        if(x.style.display=="none"){
        x.style.display="block";
       
        }else{
          x.style.display="none";

        }
    }
        
   
    viewAll=()=>{
        var x=document.getElementsByClassName("containers")[0];
        x.style.display="none";
        this.props.UserAction.getPizza();

    }
  
render(){
    let ap=this.props.allpizza;
   
   return(
       
       <body>
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
        <div className="order-pizza">
           
<div style={{float:'right'}}>
<ul class="dropdown pull-right">
    
    <li>
        <button className="btn btn-success">Sort By</button>
       
        <ul class="dropdown-menu pull-right">
           
            <li>
                <li>Type</li>
               
                <ul class="dropdown-menu pull-right">
                    <li><a  onClick={this.sortByTypeVeg}>Veg</a></li>
                    <li><a onClick={this.sortByTypeNonVeg}>Non-veg</a></li>
                    
                </ul>
            </li>
            <li><a onClick={this.toggleHidden}>Price</a></li>
            <li><a onClick={this.viewAll}>Clear Sort</a></li>
        </ul>
    </li>
   
</ul>
</div>

    
    
    <Link to="/allorder"> <button className="btn btn-danger">orderHistory</button></Link> 
    <Link to="/viewCurrentOrders"> <button className="btn btn-danger">Active order</button></Link> 

   
    <div style={{overflow:'auto'}}>
    <div class="containers "  style={{display:'none',float:'right'}}>
     <label>Minimum Price</label>  <br></br>
    <input type="number" name="min"  value={this.state.min} onChange={this.onChange}></input><br></br>
    <label>Maximum Price</label>  <br></br>
    <input type="number" name="max"  value={this.state.max} onChange={this.onChange}></input><br></br>
    <button className="btn btn-success" onClick={this.sortByPrice}>Apply</button>
   
    </div>
    </div>
    




    <h2><center className="txt">Welcome {sessionStorage.getItem("username")}</center></h2>
              
                <table className="table table-striped table-bordered">
                    
                    <thead>
                        <tr>
                            <th>Pizza Name</th>
                            <th>Description</th>
                            <th>Pizza Type</th>
                            <th>Pizza Size</th>
                          
                            <th>Pizza Cost</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ap.map((pizza)=>
                                <tr key={pizza.pizzaId}>
                                   
                                   <td>{pizza.pizzaName}</td>
                                    <td>{pizza.pizzaDescription}</td>
                                    <td>{pizza.pizzaType}</td>
                                    <td>{pizza.pizzaSize}</td>
                                    <td>{pizza.pizzaCost}</td>
                                     <td>
                                         <Link to={{pathname:'/order',state:{pizza}}}><button className="ordernow"><span className="glyphicon glyphicon-shopping-cart">  
                                        </span>
                                             Order Now</button></Link>
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
        allpizza:state.UserReducer.allpizza

    };
}
function mapDispatchToProps(dispatch){
    return{
       
       UserAction: bindActionCreators(UserAction,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (UserComponent);

