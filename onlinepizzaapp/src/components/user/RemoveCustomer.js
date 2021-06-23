import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import {bindActionCreators} from 'redux';

class RemoveCustomer extends Component{
   componentDidMount(){
       const {UserAction, match} = this.props;
       UserAction.removeCustomer(match.params.id);
   }
   render(){
       if(this.props.removecustomer !== undefined){
           this.props.history.push("/Login");
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        removecustomer : state.UserReducer.removecustomer,
       
    };
}

function mapDispatchToProps(dispatch){
     return {
        UserAction : bindActionCreators(UserAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RemoveCustomer);