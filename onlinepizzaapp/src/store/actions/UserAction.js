import axios from 'axios';

const PIZZAURL="http://localhost:8081/Customer";
const PIZZAADMURL="http://localhost:8081/Admin";

export const getPizzaSuccess=(allpizza)=>{
    console.log("inside registration success");
    
    return{
        type: 'GET_PIZZA_SUCCESS',allpizza
    }
} ;

export const getPizza=()=>{
    console.log("inside register user method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/getallpizza")
        .then(Response=>{
            localStorage.setItem("allpizza",JSON.stringify(Response.data));
          
       
            dispatch(getPizzaSuccess(Response.data));
        })
        
    };
};
export const orderSuccess=()=>{
    console.log("inside order success");
    alert("Pizza successfully ordered");
    
    return{
        type:'ORDER_SUCCESS'
    }

}
export const orderPizza=(payload)=>{
    console.log("inside order pizza method");
    let data={
        pizzaId : payload.pizzaId,
        pizzaQuantity:payload.pizzaQuantity,
        transactionMode:payload.transactionMode,
        couponName:payload.couponName,
        customerId:payload.customerId
    }
    
    return(dispatch)=>{
        return axios.post(PIZZAURL+"/order",data)
        .then(Response=>{
        
          
            dispatch(orderSuccess());
        })
        .catch(error=>{
            alert(error.response.data);
            throw(Error);
        });
       
    };
};