const initialState ={
    pizza : [],
    addpizza :undefined,
    updatepizza :undefined,
    getallpizza :undefined,
    deletepizza :undefined
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
            
            default : 
                   return state

    }
   
};