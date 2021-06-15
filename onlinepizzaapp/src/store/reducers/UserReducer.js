const initialState={
   
    allpizza:[],
    orderpizza:undefined
   
    
}

export default function UserReducer(state=initialState,action){
    switch(action.type){
        

     case 'GET_PIZZA_SUCCESS':
          return{
                ...state,
                allpizza:action.allpizza
            };
            case 'ORDER_SUCCESS':
                return{
                      ...state,
                      orderpizza:action.orderpizza
                  };
        
            default:
                return state;
    }
};