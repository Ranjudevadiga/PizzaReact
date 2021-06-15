import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';

const RootReducer=combineReducers({

    LoginReducer,UserReducer
 
});

export default RootReducer;