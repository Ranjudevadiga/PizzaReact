import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//@ts-ignoreimport {Redirect} from 'react-router-dom';

class CouponComponent extends Component{
    
    render(){
        
        return(
            <div>
                <h1>Pizza </h1>

                <Link to="/addpizza">
                    <Button  variant="contained" color="primary">
                        Add Pizza
                    </Button>
                </Link>
                    <br></br><br></br>

                <Link to="/getallpizza">
                    <Button  variant="contained" color="primary">
                    Get All Pizza
                   </Button>
                </Link>
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