import axios from 'axios';
const ADMINURL="http://localhost:8081//Admin";

export const getPizzaSuccess =(pizza) => {
    console.log("inside getAllPizza method");
    return{
        type: 'GET_ALL_PIZZA_SUCCESS',pizza
    }
};
export const getAllPizza =() => {
    console.log("inside getAllPizza method");
         return (dispatch) =>{
             return axios.get(ADMINURL+"/getallpizza")
             .then(Response => {
                 localStorage.setItem("pizza",JSON.stringify(Response.data));
                 console.log("api call");
                 dispatch(getPizzaSuccess(Response.data));
             })
         };
};


export const addPizzaSuccess=()=>{
    console.log("inside addPizzaSucess method");
    return{
        type:'ADD_PIZZA_SUCCESS'
    }
};
export const addPizza=(payload)=>{
    console.log("inside addPizza method");
    let data={
        
        pizzaName : payload.pizzaName,
        pizzaDescription : payload.pizzaDescription,
        pizzaType : payload.pizzaType,
        pizzaSize : payload.pizzaSize,
        pizzaCost : payload.pizzaCost
    }
    return(dispatch)=>{
        return axios.post(ADMINURL+"/addpizza",data)
        .then(Response => {
            console.log("api call");
            console.log(data);
            dispatch(addPizzaSuccess());
            
        })
        .catch(Error =>{
            console.log("Error");
            throw(Error);
        });
    };
};


export const deletePizzaSuccess=()=>{
    console.log("inside deletePizzaSuccess method");
    return {
        type : 'PIZZA_DELETED'
    }
};

export const deletePizza = (code) =>{
    console.log("inside deletePizza method");
    return (dispatch)=> {
        return axios.delete(ADMINURL+"/deletepizza/"+code)
        .then(Response => {
            console.log("api call");
            dispatch(deletePizzaSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const updatePizzaSuccess=()=>{
    console.log("inside updatePizzasuccess method");
    return {
        type : 'PIZZA_UPDATED'
    }
};


export const updatePizza = (payload) =>{
    console.log("inside updatePizza method");
    let pizza = {
        pizzaId : payload.pizzaId,
        pizzaName : payload.pizzaName,
        pizzaDescription : payload.pizzaDescription,
        pizzaType : payload.pizzaType,
        pizzaSize : payload.pizzaSize,
        pizzaCost : payload.pizzaCost
    }
    return (dispatch)=> {
        return axios.put(ADMINURL+"/updatepizza/"+pizza.pizzaId,pizza)
        .then(Response => {
            console.log("api call");
            dispatch(updatePizzaSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};