import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//@ts-ignoreimport {Redirect} from 'react-router-dom';

class CouponComponent extends Component{
    
    render(){
        
        return(
            <div>
                <h1>Coupon </h1>
                <Link to="/getallcoupon">
                    <Button  variant="contained" color="primary">
                    Get All Coupon
                   </Button></Link>
                   <br></br><br></br>

                   <Link to="/addcoupon">
                   <Button  variant="contained" color="primary">
                    Add Coupon
                   </Button></Link>
                   <br></br><br></br>

                   <React.Fragment>
                    <Link to="/admin">
                    <Button variant="contained" color="secondary">
                    Back to Dashboard
                </Button></Link> 
                </React.Fragment> 
            </div>
        );
    }
}
export default  (CouponComponent);