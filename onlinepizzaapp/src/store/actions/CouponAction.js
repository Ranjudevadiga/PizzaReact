import axios from 'axios';
const ADMINURL="http://localhost:8081//Admin";

export const getCouponSuccess =(coupon) => {
    console.log("inside getAllCoupon method");
    return{
        type: 'GET_ALL_COUPON_SUCCESS',coupon
    }
};
export const getAllCoupon =() => {
    console.log("inside getAllCoupon method");
         return (dispatch) =>{
             return axios.get(ADMINURL+"/viewCoupons")
             .then(Response => {
                 localStorage.setItem("coupon",JSON.stringify(Response.data));
                 console.log("api call");
                 dispatch(getCouponSuccess(Response.data));
             })
         };
};


export const addCouponSuccess=()=>{
    console.log("inside addCouponSucess method");
    return{
        type:'ADD_COUPON_SUCCESS'
    }
};
export const addCoupon=(payload)=>{
    console.log("inside addCoupon method");
    let data={
        
        couponName : payload.couponName,
        couponDescription : payload.couponDescription,
        discountValue : payload.discountValue,
        pizzaId : payload.pizzaId
    }
    return(dispatch)=>{
        return axios.post(ADMINURL+"/addCoupon",data)
        .then(Response => {
            console.log("api call");
            dispatch(addCouponSuccess());
            
        })
        .catch(Error =>{
            console.log("Error");
            throw(Error);
        });
    };
};


export const deleteCouponSuccess=()=>{
    console.log("inside deleteCouponSuccess method");
    return {
        type : 'COUPON_DELETED'
    }
};

export const deleteCoupon = (code) =>{
    console.log("inside deleteCoupon method");
    return (dispatch)=> {
        return axios.delete(ADMINURL+"/deletecoupons/"+code)
        .then(Response => {
            console.log("api call");
            dispatch(deleteCouponSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const updateCouponSuccess=()=>{
    console.log("inside updateCouponsuccess method");
    return {
        type : 'COUPON_UPDATED'
    }
};


export const editcoupon = (payload) =>{
    console.log("inside updateCoupon method",payload);
    let coupon = {
        couponId : payload.couponId,
        couponName : payload.couponName,
        couponDescription : payload.couponDescription,
        discountValue : payload.discountValue,
        pizzaId : payload.pizzaId
    }
    return (dispatch)=> {
        return axios.put(ADMINURL+"/editcoupon/"+coupon.couponId,coupon)
        .then(Response => {
            console.log("api call");
            dispatch(updateCouponSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};