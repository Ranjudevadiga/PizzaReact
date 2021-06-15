import axios from 'axios';

const LOGINURL="http://localhost:8081/Customer";

export const loginSuccess=(login)=>{

    console.log("inside loginsuccess method");
   
    return{
        type:'LOGIN_SUCCESS',login
    }
};
export const loginValidate=(payload)=>{
    console.log("inside loginvalidate  method");
    let data={
        customerEmail:payload.customerEmail,
        password:payload.password
   }
   
    return (dispatch)=>{
        return axios.post(LOGINURL+"/validate",data)
        
        .then(Response=>{
          
           localStorage.setItem("login",JSON.stringify(Response.data));
           if(Response.data.role==='admin'){
            sessionStorage.setItem("adminId",Response.data.customerId);
           }
           else{
           sessionStorage.setItem("userId",Response.data.customerId);
           sessionStorage.setItem("username",Response.data.customerName);
           }
            
            dispatch(loginSuccess(Response.data));

        })
        .catch(Error=>{
            alert(Error.response.data);
            throw(Error);
        });
    };
};