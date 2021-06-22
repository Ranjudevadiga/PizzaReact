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


export const getCurrentOrderSuccess=(adcurrentOrder)=>{
    console.log("inside current order");
    
    return{
        type: 'GET_CURRENT_ORDER_SUCCESS',adcurrentOrder
    }
} ;

export const getAdminCurrentOrders=()=>{
    console.log("inside order method");
    
    return(dispatch)=>{
        return axios.get(ADMINURL+"/viewAdminCurrentOrders/")
        .then(Response=>{
            localStorage.setItem("adcurrentOrder",JSON.stringify(Response.data));
          
       
            dispatch(getCurrentOrderSuccess(Response.data));
        })
        
    };
};


export const acceptOrderSuccess=()=>{
    console.log("inside order accept success method");

    window.location.href="/ordermanage"
    return {
        type : 'ORDER_ACCEPTED'
    }
};

export const acceptOrder = (id) =>{
    console.log("inside accept order method");
    
    return (dispatch)=> {
        return axios.put(ADMINURL+"/acceptOrder/"+id)
        .then(Response => {
            console.log("api call");
            dispatch(acceptOrderSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const cancelOrderSuccess=()=>{
    console.log("inside cancel accept success method");

    window.location.href="/ordermanage"
    return {
        type : 'ORDER_CANCEL'
    }
};
export const cancelOrder = (id) =>{
    console.log("inside cancel order method");
    
    return (dispatch)=> {
        return axios.put(ADMINURL+"/cancelOrder/"+id)
        .then(Response => {
            console.log("api call");
            dispatch(cancelOrderSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};


export const deliverOrderSuccess=()=>{
    console.log("inside deliver success method");

    window.location.href="/ordermanage"
    return {
        type : 'ORDER_DELIVER'
    }
};
export const deliverOrder = (id) =>{
    console.log("inside deliver order method");
    
    return (dispatch)=> {
        return axios.put(ADMINURL+"/deliver/"+id)
        .then(Response => {
            console.log("api call");
            dispatch(deliverOrderSuccess());
        })
        .catch(Error=> {
            alert(Error.response.data);
            throw(Error);
        });
    };
};


export const getOrderSuccess=(allorder)=>{
    console.log("inside  order");
    
    return{
        type: 'GET_ORDER_SUCCESS',allorder
    }
} ;

export const getAllOrder=()=>{
    console.log("inside order method");
    
    return(dispatch)=>{
        return axios.get(ADMINURL+"/viewOrders")
        .then(Response=>{
            localStorage.setItem("allorder",JSON.stringify(Response.data));
          
       
            dispatch(getOrderSuccess(Response.data));
        })
        
    };
};

