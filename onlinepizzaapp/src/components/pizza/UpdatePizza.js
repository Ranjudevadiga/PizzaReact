import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as AdminAction from '../../store/actions/AdminAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


class UpdatePizza extends Component {
    constructor(props){
        super(props)
        this.state = {
            pizzaId : props.location.state.pizza.pizzaId,
            pizzaName : props.location.state.pizza.pizzaName,
            pizzaDescription : props.location.state.pizza.pizzaDescription,
            pizzaType : props.location.state.pizza.pizzaType,
            pizzaSize : props.location.state.pizza.pizzaSize,
            pizzaCost : props.location.state.pizza.pizzaCost
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updatePizza= (e) =>{
        e.preventDefault();
        let payload = {
            pizzaId : this.state.pizzaId,
            pizzaName : this.state.pizzaName,
            pizzaDescription : this.state.pizzaDescription,
            pizzaType : this.state.pizzaType,
            pizzaSize : this.state.pizzaSize,
            pizzaCost : this.state.pizzaCost
        }
        this.props.AdminAction.updatePizza(payload);
      this.props.history.push("/getallpizza");
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       
        
        return(
            <div>
       <h1>Update Pizza </h1>
     <form >
        <div className="form-group">

                    <TextField
                    variant="outlined"
                    margin="normal"
                    label="Pizza Id"
                    id="pizzaId"
                    name="pizzaId"
                    autoFocus
                    value={this.state.pizzaId}  
                    readOnly
                  /><br></br>

                     <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Name"
                    id="pizzaName"
                    name="pizzaName"
                    autoComplete="pizzaName"
                    color="primary"
                    autoFocus
                    value={this.state.pizzaName}  onChange={this.onChange}
                  /><br></br>

                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Descrption"
                    id="pizzaDescription"
                    name="pizzaDescription"
                    autoComplete="pizzaDescription"
                    autoFocus
                    value={this.state.pizzaDescription}  onChange={this.onChange}
                  /><br></br>

                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Type"
                    id="pizzaType"
                    name="pizzaType"
                    autoComplete="pizzaType"
                    color="primary"
                    autoFocus
                    value={this.state.pizzaType}  onChange={this.onChange}
                  /><br></br>

                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Size"
                    id="pizzaSize"
                    name="pizzaSize"
                    autoComplete="pizzaSize"
                    color="primary"
                    autoFocus
                    value={this.state.pizzaSize}  onChange={this.onChange}
                  /><br></br>

                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    label="Cost"
                    id="pizzaCost"
                    name="pizzaCost"
                    autoComplete="pizzaCost"
                    color="primary"
                    autoFocus
                    value={this.state.pizzaCost}  onChange={this.onChange}
                  /><br></br>

           </div>
      <Button variant="contained" color="primary" onClick={this.updatePizza}>update Pizza</Button>
            <Link to="/getallpizza"> <Button variant="contained" color="secondary">Cancel</Button></Link> 
     </form> 
    </div>
        );

    }
}
function mapStateToProps(state) {
    return {
       updatepizza : state.AdminReducer.updatepizza
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        AdminAction : bindActionCreators(AdminAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdatePizza);