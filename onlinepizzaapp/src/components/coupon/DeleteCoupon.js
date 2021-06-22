import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CouponAction from '../../store/actions/CouponAction';
import {bindActionCreators} from 'redux';


class DeleteCoupon extends Component{
   componentDidMount(){
       const {CouponAction, match} = this.props;
       CouponAction.deleteCoupon(match.params.id);
   }
   render(){
    
       if(this.props.deletecoupon === undefined ){
        this.props.history.push("/getallcoupon");
           
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        deletecoupon : state.CouponReducer.deletecoupon
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        CouponAction : bindActionCreators(CouponAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteCoupon);

