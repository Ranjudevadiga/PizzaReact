const initialState={
    login:undefined,
    register:undefined,
    
}

export default function LoginReducer(state=initialState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                login:action.login
            };
        
       
            default:
                return state;
    }
};