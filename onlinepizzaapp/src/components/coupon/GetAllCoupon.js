
import React, { Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import * as  CouponAction from '../../store/actions/CouponAction';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  

class GetAllCoupon extends Component {
    componentDidMount(){
    this.props.CouponAction.getAllCoupon()
  }
  componentDidUpdate(){
    this.props.CouponAction.getAllCoupon()
  }
  backToAdmin(){
      window.location.href="/admin";
  }
    render(){
       let stock = this.props.coupon;
       let login = this.props.login;
    /* let customerlogin = window.localStorage.getItem("login")
      console.log("from localstorage = "+customerlogin);
       if(login===undefined){
        alert("unauthorized access.. please login!!!!");
        return <Redirect to="/login"></Redirect>
     }
      console.log(login.role);*/
    

     
        return(
            <div>
                <h1>Existing Coupons</h1>
                

                <TableContainer component={Paper}>
      <Table  className={ StyledTableCell.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">COUPON_ID</StyledTableCell>
            <StyledTableCell align="center">COUPON_NAME</StyledTableCell>
            <StyledTableCell align="center">COUPON DESCRIPTION</StyledTableCell>
            <StyledTableCell align="center">DISCOUNT VALUE</StyledTableCell>
            <StyledTableCell align="center">PIZZA ID</StyledTableCell>
            <StyledTableCell align="center" colspan='2'>ACTION </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {stock.map(coupon => (
            <StyledTableRow key={coupon.couponId}>
                
              <StyledTableCell >{coupon.couponId}</StyledTableCell>
              <StyledTableCell >{coupon.couponName}</StyledTableCell>
              <StyledTableCell align="center">{coupon.couponDescription}</StyledTableCell>
              <StyledTableCell align="center">{coupon.discountValue}</StyledTableCell>
              <StyledTableCell align="center">{coupon['pizza'].pizzaId}</StyledTableCell>
              {
                              (login !==undefined) &&  (login.role==="admin")?
                                <React.Fragment> 
                                </React.Fragment> :
                                  <React.Fragment>
                                      <td> <Link to={`/deletecoupon/${coupon.couponId}`}><Button variant="contained" color="primary" >Delete</Button></Link></td>
                                    <td><Link to={{pathname:'/editcoupon',state:{coupon}}}><Button className="btn btn-warning">Update</Button></Link></td>
                                  </React.Fragment>
                            }

                            


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                 <br></br> 
                
                 { (login !==undefined) &&(login.role==="admin")?
                                <React.Fragment>
                                    <Link to="/addcoupon"><Button variant="contained" color="inherit">ADD Coupon</Button></Link>
                                    <Link to="/admin"><Button variant="contained" color="inherit">BACK TO ADMIN</Button></Link>
                                </React.Fragment> :
                                
                                  <React.Fragment>
                                     <Link to="/addcoupon"><Button variant="contained" color="inherit">ADD Coupon</Button></Link>
                                      <Link to="/couponmanage"><Button variant="contained" color="secondary">
                                          BACK TO Coupon Section
                                          </Button></Link>
                                      </React.Fragment>
                                      
                                      
                                      }
            </div>
        );
            
    }
}
function mapStateToProps(state) {
    return {
        coupon : state.CouponReducer.coupon,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
     return {
        CouponAction :bindActionCreators(CouponAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllCoupon);
