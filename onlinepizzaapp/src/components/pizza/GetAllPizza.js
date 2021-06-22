import React, { Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as  AdminAction from '../../store/actions/AdminAction';
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
  

class GetAllPizza extends Component {
    componentDidMount(){
    this.props.AdminAction.getAllPizza()
  }
  componentDidUpdate(){
    this.props.AdminAction.getAllPizza()
  }
  backToAdmin(){
      window.location.href="/admin";
  }
    render(){
       let stock = this.props.pizza;
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
                <h1>Existing Pizzas</h1>
                

                <TableContainer component={Paper}>
      <Table  className={ StyledTableCell.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">PIZZA ID</StyledTableCell>
            <StyledTableCell align="center">PIZZA NAME</StyledTableCell>
            <StyledTableCell align="center">PIZZA DESCRIPTION</StyledTableCell>
            <StyledTableCell align="center">PIZZA TYPE</StyledTableCell>
            <StyledTableCell align="center">PIZZA SIZE</StyledTableCell>
            <StyledTableCell align="center">PIZZA COST</StyledTableCell>
            <StyledTableCell align="center" colspan='2'>ACTION </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {stock.map(pizza => (
            <StyledTableRow key={pizza.pizzaId}>
                
              <StyledTableCell >{pizza.pizzaId}</StyledTableCell>
              <StyledTableCell >{pizza.pizzaName}</StyledTableCell>
              <StyledTableCell align="center">{pizza.pizzaDescription}</StyledTableCell>
              <StyledTableCell align="center">{pizza.pizzaType}</StyledTableCell>
              <StyledTableCell align="center">{pizza.pizzaSize}</StyledTableCell>
              <StyledTableCell align="center">{pizza.pizzaCost}</StyledTableCell>

              {
                              (login !==undefined) &&  (login.role==="admin")?
                                <React.Fragment> 
                                </React.Fragment> :
                                  <React.Fragment>
                                      <td> <Link to={`/deletepizza/${pizza.pizzaId}`}><Button variant="contained" color="primary">Delete</Button> </Link></td>
                                    <td><Link to={{pathname:'/updatepizza',state:{pizza}}}><Button className="btn btn-warning">Update</Button></Link></td>
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
                                    <Link to="/addpizza"><Button variant="contained" color="inherit">ADD PIZZA</Button></Link>
                                    <Link to="/admin"><Button variant="contained" color="inherit">BACK TO ADMIN</Button></Link>
                                </React.Fragment> :
                                
                                  <React.Fragment>
                                      <Link to="/pizzamanage"><Button variant="contained" color="secondary">
                                          BACK TO Pizza Section
                                          </Button></Link>
                                      </React.Fragment>
                                      
                                      
                                      }
            </div>
        );
            
    }
}
function mapStateToProps(state) {
    return {
        pizza : state.AdminReducer.pizza,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
     return {
        AdminAction :bindActionCreators(AdminAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllPizza);
