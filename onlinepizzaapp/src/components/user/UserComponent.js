import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';

class UserComponent extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem("userId")==undefined)
        {
           
            window.location.href="/login";
        }
    }

    logout(){
        sessionStorage.removeItem("userId");
        window.location.href="/login";
    }
    componentDidMount(){
        this.props.UserAction.getPizza();
    }
  
render(){
    let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id');
        let login=this.props.login;
   return(
       <body>
    
    <div class="pizza-display">
                
                <h2 align="center">Pizza List</h2>
              
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
                            this.props.allpizza.map((pizza)=>
                                <tr key={pizza.pizzaId}>
                                   
                                   <td>{pizza.pizzaName}</td>
                                    <td>{pizza.pizzaDescription}</td>
                                    <td>{pizza.pizzaType}</td>
                                    <td>{pizza.pizzaSize}</td>
                                    <td>{pizza.pizzaCost}</td>
                                     <td>
                                         <Link to={{pathname:'/order',state:{pizza}}}><button>
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
