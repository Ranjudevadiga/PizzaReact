import {createStore,applyMiddleware} from 'redux';
import RootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';
const StoreInstance=ConfigStore();
export default function ConfigStore(){
    return createStore(
        RootReducer,
        applyMiddleware(thunk)
    );
};
