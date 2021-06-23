const initialState={
   
    allpizza:[],
    orderpizza:undefined,
    currentOrder:[],
    deleteOrder:undefined,
    updateOrder:undefined,
    allcoupon:[],
    allorder:[],
    orderbyid:[],
    customer : [],
    addcustomer :undefined,
    updatecustomer :undefined,
    getcustomer :undefined,
    removecustomer :undefined
   
    
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

                  case 'GET_CURRENT_ORDER_SUCCESS':
                    return{
                          ...state,
                          currentOrder:action.currentOrder
                      };
            case 'DELETE_ITEM_SUCCESS':
                return{
                    ...state,
                    deleteOrder:'Deleted'

                }
            case 'ORDER_EDITED':
                return{
                    ...state,
                    updateOrder:'Updated'

                }

            case 'GET_COUPON_SUCCESS':
                return{
                    ...state,
                    allcoupon:action.allcoupon
                }
                case 'GET_PIZZA_TYPE_SUCCESS':
                    return{
                          ...state,
                          allpizza:action.allpizza
                      };

                case 'GET_ORDER_HISTORY_SUCCESS':
                    return{
                        ...state,
                        allorder:action.allorder
                    }
                case 'GET_ORDER_BY_ID_SUCCESS':
                    return{
                        ...state,
                        orderbyid:action.orderbyid
                    }
                    case 'GET_PIZZA_PRICE_SUCCESS':
                        return{
                              ...state,
                              allpizza:action.allpizza
                          };
                          case 'GET_ALL_CUSTOMER_SUCCESS':
                            return{
                                ...state,
                                customer : action.customer
                            };
                            case 'GET__CUSTOMER_BY_ID_SUCCESS':
                                return{
                                    ...state,
                                    customer : action.customer
                                };
                            case 'ADD_CUSTOMER_SUCCESS':
                            return{
                                ...state,
                                addcustomer : 'added'
                            };
                
                            case 'CUSTOMER_UPDATED' :
                            return {
                                ...state,
                                updatecustomer : 'updated'
                            };
                
                            case 'CUSTOMER_REMOVED' :
                            return {
                                ...state,
                                removecustomer : 'removed'
                            }
                
        
            default:
                return state;
    }
};