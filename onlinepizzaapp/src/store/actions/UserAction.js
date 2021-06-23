import axios from 'axios';

const PIZZAURL="http://localhost:8081/Customer";
const PIZZAADMURL="http://localhost:8081/Admin";
const CUSTOMERURL="http://localhost:8081/springrestdata/Customer";

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
    window.location.href="/viewCurrentOrders";
    
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

export const getCurrentOrderSuccess=(currentOrder)=>{
    console.log("inside current order");
    
    return{
        type: 'GET_CURRENT_ORDER_SUCCESS',currentOrder
    }
} ;

export const getCurrentOrders=()=>{
    console.log("inside order method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/viewCurrentOrders/"+sessionStorage.getItem('userId'))
        .then(Response=>{
            localStorage.setItem("currentOrder",JSON.stringify(Response.data));
          
       
            dispatch(getCurrentOrderSuccess(Response.data));
        })
        
    };
};

export const orderDeleteSuccess=()=>{
    console.log("inside delete success");
    window.location.href="/viewCurrentOrders";
    return{
        type: 'DELETE_ITEM_SUCCESS'
    }
} ;


export const deleteCurrentOrder=(bookingOrderId)=>{
console.log("inside delete");
return(dispatch)=>{
    return axios.delete(PIZZAURL+"/cancel/"+bookingOrderId)
    .then(Response=>{        
   
        dispatch(orderDeleteSuccess());
    })
    .catch(Error=> {
        alert(Error.response.data);
        window.location.href="/viewCurrentOrders";
        throw(Error);
    });
};
};

export const updateOrderSuccess=()=>{
    console.log("inside editItemSuccess method");
    window.location.href="/viewCurrentOrders";
    return {
        type : 'ORDER_EDITED'
    }
};

export const updateOrder = (payload) =>{
    console.log("inside editItem method");
    let item = {
       pizzaQuantity:payload.pizzaQuantity,
       bookingOrderId:payload.bookingOrderId,
       pizzaId:payload.pizzaId
    }
    return (dispatch)=> {
        return axios.put(PIZZAURL+"/updateOrder",item)
        .then(Response => {
            
            dispatch(updateOrderSuccess());
        })
        .catch(Error=> {
            alert(Error.response.data);
            throw(Error);
        });
    };
};

export const getCouponSuccess=(allcoupon)=>{
    console.log("inside registration success");
    
    return{
        type: 'GET_COUPON_SUCCESS',allcoupon
    }
} ;

export const getCoupon=()=>{
    console.log("inside register user method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/viewCoupons")
        .then(Response=>{
            localStorage.setItem("allcoupon",JSON.stringify(Response.data));
          
       
            dispatch(getCouponSuccess(Response.data));
        })
        
    };
};


export const getPizzaTypeSuccess=(allpizza)=>{
    console.log("inside type success");
    
    return{
        type: 'GET_PIZZA_TYPE_SUCCESS',allpizza
    }
} ;

export const sortByType=(payload)=>{
   
    console.log("inside sort method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/viewPizzaByType/"+payload)
        .then(Response=>{
            localStorage.setItem("allpizza",JSON.stringify(Response.data));
          
       
            dispatch(getPizzaTypeSuccess(Response.data));
        })
        .catch(Error=> {
            alert(Error.response.data);
            throw(Error);
        });
        
    };
};
export const getOrderHistorySuccess=(allorder)=>{
    console.log("inside registration success");
   
    return{
        type: 'GET_ORDER_HISTORY_SUCCESS',allorder
    }
} ;

export const viewOrderHistory=()=>{
    console.log("inside order history method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/viewCustomerOrders/"+sessionStorage.getItem('userId'))
        .then(Response=>{
            localStorage.setItem("allorder",JSON.stringify(Response.data));
         
       
            dispatch(getOrderHistorySuccess(Response.data));
        })
        
    };
};

export const getOrderByIdSuccess=(orderbyid)=>{
    console.log("inside  success");
    
    return{
        type: 'GET_ORDER_BY_ID_SUCCESS',orderbyid
    }
} ;

export const viewHistoryById=(id)=>{
    console.log("inside view history method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/viewPizzaOrder/"+id)
        .then(Response=>{
            localStorage.setItem("orderbyid",JSON.stringify(Response.data));
          
       
            dispatch(getOrderByIdSuccess(Response.data));
        })
        
    };
};
export const getPizzaPriceSuccess=(allpizza)=>{
    console.log("inside type success");
    
    return{
        type: 'GET_PIZZA_PRICE_SUCCESS',allpizza
    }
} ;

export const sortByPrice=(payload)=>{
   
    console.log("inside price method");
    
    return(dispatch)=>{
        return axios.get(PIZZAURL+"/viewPizzaBySorting/"+payload.min+"/"+payload.max)
        .then(Response=>{
            localStorage.setItem("allpizza",JSON.stringify(Response.data));
          
       
            dispatch(getPizzaPriceSuccess(Response.data));
        })
        .catch(Error=> {
            alert(Error.response.data);
            throw(Error);
        });
        
    };
};



export const getCustomerSuccess =(customer) => {
    console.log("inside getAllCustomerSuccess method");
    return{
        type: 'GET_ALL_CUSTOMER_SUCCESS',customer
    }
};
export const getcustomer =() => {
    console.log("inside getcustomer method");
         return (dispatch) =>{
             return axios.get(CUSTOMERURL+"/getallcustomer")
             .then(Response => {
                 localStorage.setItem("customer",JSON.stringify(Response.data));
                 console.log("api call");
                 dispatch(getCustomerSuccess(Response.data));
             })
         };
};
export const addCustomerSuccess=()=>{
    console.log("inside addCustomerSuccess method");
    alert("Account created successfully");
    window.location.href="/";
    return{
        type:'ADD_CUSTOMER_SUCCESS'
    }
};
export const addCustomer=(payload)=>{
    console.log("inside addCustomer method");
    let customer={
            customerName : payload.customerName,
            role : payload.role,
            customerMobile : payload.customerMobile,
            customerEmail : payload.customerEmail,
            customerAddress : payload.customerAddress,
            password : payload.password
            
    }
    return(dispatch)=>{
        return axios.post(CUSTOMERURL+"/register",customer)
        .then(Response => {
            console.log("api call");
            dispatch(addCustomerSuccess());
        })
        .catch(Error =>{
            console.log("Error");
            alert("Error");
            throw(Error);
        });
    };
};

export const updateCustomerSuccess=()=>{
    console.log("inside updateCustomerSuccess method");
    alert("Updated Successfully");
    
    return {
        type : 'CUSTOMER_UPDATED'
    }
};

export const updateCustomer= (payload) =>{
    console.log("inside updateCustomer method");
    let customer = {
            customerId: payload.customerId,
            customerName : payload.customerName,
            role : payload.role,
            customerMobile : payload.customerMobile,
            customerEmail : payload.customerEmail,
            customerAddress : payload.customerAddress,
            password : payload.password
    }
    return (dispatch)=> {
        return axios.put(CUSTOMERURL+"/updateCustomer?customerId="+customer.customerId,customer)
        .then(Response => {
            console.log("api call");
            dispatch(updateCustomerSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            alert("Account updation unsuccessful");
            throw(Error);
        });
    };
};

export const removeCustomerSuccess=()=>{
    console.log("inside removeCustomerSuccess method");
    alert("Account Deleted");
    window.location.href="/";
    return {
        type : 'CUSTOMER_REMOVED'
    }
};

export const removeCustomer = (code) =>{
    console.log("inside removeCustomer method");
    return (dispatch)=> {
        return axios.delete(CUSTOMERURL+"/delete/"+code)
        .then(Response => {
            console.log("api call");
            dispatch(removeCustomerSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getCustomerbyidSuccess =(customer) => {
    console.log("inside getCustomerbyidSuccess method");
    return{
        type: 'GET__CUSTOMER_BY_ID_SUCCESS',customer
    }
};
export const getcustomerbyid =(id) => {
    console.log("inside getcustomerbyid method");
         return (dispatch) =>{
             return axios.get(CUSTOMERURL+"/getbyid/"+id)
             .then(Response => {
                 localStorage.setItem("customer",JSON.stringify(Response.data));
                 console.log("api call");
                 dispatch(getCustomerbyidSuccess(Response.data));
             })
         };
};

