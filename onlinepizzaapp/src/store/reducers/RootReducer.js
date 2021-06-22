import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';
import CouponReducer from './CouponReducer';

const RootReducer=combineReducers({

    LoginReducer,UserReducer,CouponReducer
 
});

export default RootReducer;