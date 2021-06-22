import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as AdminAction from '../../store/actions/AdminAction';
import {bindActionCreators} from 'redux';

class DeletePizza extends Component{
   componentDidMount(){
       const {AdminAction, match} = this.props;
       AdminAction.deletePizza(match.params.id);
   }
   render(){
    
       if(this.props.deletepizza === undefined){
           this.props.history.push("/getallpizza");  
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        deletepizza : state.AdminReducer.deletepizza
    };
}
function mapDispatchToProps(dispatch){
     return {
        AdminAction : bindActionCreators(AdminAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeletePizza);
