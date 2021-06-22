import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';
import CouponReducer from './CouponReducer';
import AdminReducer from './AdminReducer';

const RootReducer=combineReducers({

    LoginReducer,UserReducer,CouponReducer,AdminReducer
 
});

export default RootReducer;