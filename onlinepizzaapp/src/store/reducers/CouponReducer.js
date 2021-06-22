const initialState ={
    coupon : [],
    addcoupon :undefined,
    editcoupon :undefined,
    getallcoupon :undefined,
    deletecoupon :undefined
}
   

export default function CouponReducer(state = initialState,action){
    switch(action.type){
        case 'GET_ALL_COUPON_SUCCESS':
            return{
                ...state,
                coupon : action.coupon
            };
        
            case 'ADD_COUPON_SUCCESS':
            return{
                ...state,
                addcoupon : 'added'
            };

            case 'COUPON_UPDATED' :
            return {
                ...state,
                editcoupon : 'updated'
            };

            case 'COUPON_REMOVED' :
            return {
                ...state,
                deletecoupon : 'removed'
            }

            default : 
                   return state

    }
   
};