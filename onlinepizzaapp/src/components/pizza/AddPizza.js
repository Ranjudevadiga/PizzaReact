import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminAction from '../../store/actions/AdminAction';
import {bindActionCreators} from 'redux';
import { Redirect } from 'react-router';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
       '& > *': {
         margin: theme.spacing(1),
         width: '25ch',
       },
     },
  }));

  class AddPizza extends Component{
    constructor(props){
        super(props)
        this.state={
            pizzaName :'',
            pizzaDescription: '',
            pizzaType :'',
            pizzaSize :'',
            pizzaCost :''

        }
        this.addNewPizza =this.addNewPizza.bind(this);
    }
    addNewPizza = (add)=> {
        let payload ={
            pizzaName :this.state.pizzaName,
            pizzaDescription:this.state.pizzaDescription,
            pizzaType:this.state.pizzaType,
            pizzaSize:this.state.pizzaSize,
            pizzaCost:this.state.pizzaCost
        }
        this.props.CustomerAction.addPizza(payload);
        add.preventDefault();
        this.props.history.push("/getallpizza");
    }
    onChange =(obj) => this.setState({[obj.target.name] :obj.target.value});
    render(){

        return(
            <div>
            <h1>Add Pizza</h1>
            <form className={useStyles.root} Validate autoComplete="off" onSubmit={this.addNewPizza}>
                <div className="form-group">
                

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Pizza Name"
                    id="pizzaName"
                    name="pizzaName"
                    autoComplete="pizzaName"
                    autoFocus
                    value={this.state.pizzaName}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Pizza Description"
                    id="pizzaDescription"
                    name="pizzaDescription"
                    autoComplete="pizzaDescription"
                    autoFocus
                    value={this.state.pizzaDescription}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Pizza Type"
                    id="pizzaType"
                    name="pizzaType"
                    autoComplete="pizzaType"
                    autoFocus
                    value={this.state.pizzaType}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Pizza Size"
                    id="pizzaSize"
                    name="pizzaSize"
                    autoComplete="pizzaSize"
                    autoFocus
                    value={this.state.pizzaSize}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    label="Pizza Cost"
                    id="pizzaCost"
                    name="pizzaCost"
                    autoComplete="pizzaCost"
                    autoFocus
                    type="number"
                    value={this.state.PizzaCost}  onChange={this.onChange}
                  /><br></br>
                   
                </div>
               
                
                <Button type="submit" variant="contained" color="primary">
                    add</Button>
                   
                <React.Fragment>
                                   <Link to="/pizzamanage"><Button variant="contained" color="secondary">
                                          BACK TO Pizza Section
                                </Button></Link> 
                                      </React.Fragment>
            </form>
        </div>
        ); 
    }
}

function mapStateToProps(state){
  return{
    addpizza : state.AdminReducer.addpizza
  };
}
function mapDispatchToProps(dispatch){
  return{
    CustomerAction:bindActionCreators(AdminAction,dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(AddPizza);