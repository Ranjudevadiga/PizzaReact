const initialState ={
    pizza : [],
    addpizza :undefined,
    updatepizza :undefined,
    getallpizza :undefined,
    deletepizza :undefined,
    adcurrentOrder:[],
    orderaccept:undefined,
    ordercancel:undefined,
    orderdeliver:undefined,
    allorder:[]
}
   

export default function AdminReducer(state = initialState,action){
    switch(action.type){
        case 'GET_ALL_PIZZA_SUCCESS':
            return{
                ...state,
                pizza : action.pizza
            };
        
            case 'ADD_PIZZA_SUCCESS':
            return{
                ...state,
                addpizza : 'added'
            };

            case 'PIZZA_UPDATED' :
            return {
                ...state,
                updatepizza : 'updated'
            };

            case 'PIZZA_REMOVED' :
            return {
                ...state,
                deletepizza : 'removed'
            }
            case 'ORDER_SUCCESS' :
                return {
                    ...state,
                    orderaccept : 'accepted'
                }
                case 'CANCEL_SUCCESS' :
                    return {
                        ...state,
                        ordercancel : 'cancelled'
                    }
                    case 'DELIVER_SUCCESS' :
                        return {
                            ...state,
                            orderdeliver : 'delivered'
                        }

            case 'GET_CURRENT_ORDER_SUCCESS':
                return{
                      ...state,
                      adcurrentOrder:action.adcurrentOrder
                  };
                  case 'GET_ORDER_SUCCESS':
                    return{
                          ...state,
                          allorder:action.allorder
                      };
            
            default : 
                   return state

    }
   
};