import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch, useLocation} from 'react-router-dom';
import Login from './components/Login';

import UserComponent from './components/user/UserComponent';
import AdminComponent from './components/admin/AdminComponent';
import Order from './components/user/Order';
import ViewCurrentOrders from './components/user/ViewCurrentOrders';
import CouponComponent from './components/coupon/CouponComponent';
import AddCoupon from './components/coupon/AddCoupon';
import DeleteCoupon from './components/coupon/DeleteCoupon';
import EditCoupon from './components/coupon/EditCoupon';
import GetAllCoupon from './components/coupon/GetAllCoupon';
import UpdateOrder from './components/user/UpdateOrder';
import OrderHistory from './components/user/OrderHistory';
import ViewOrderById from './components/user/ViewOrderById';
import PizzaComponent from './components/pizza/PizzaComponent';
import AddPizza from './components/pizza/AddPizza';
import GetAllPizza from './components/pizza/GetAllPizza';
import DeletePizza from './components/pizza/DeletePizza';
import UpdatePizza from './components/pizza/UpdatePizza';
import AdminCurrentOrder from './components/admin/AdminCurrentOrder';
import AllOrder from './components/admin/AllOrder';
import UpdateCustomer from './components/user/UpdateCustomer';
import RemoveCustomer from './components/user/RemoveCustomer';
import AddCustomer from './components/user/AddCustomer';
import GetById from './components/user/GetById';
import GetAllCustomer from './components/user/GetAllCustomer';


function App() {
  return (
    <div className="App">
      <Router>
         
      <Switch>

      <Route path="/" exact component={Login}></Route>
      <Route path="/admin" exact component={AdminComponent}></Route>
      <Route path="/user" exact component={UserComponent}></Route>
      <Route path="/order" exact component={Order}></Route>
      <Route path="/viewCurrentOrders" exact component={ViewCurrentOrders}></Route>
      <Route path="/updateOrder" exact component={UpdateOrder}></Route>
      <Route path="/allorder" exact component={OrderHistory}></Route>
      <Route path="/vieworderbyid/:id" exact component={ViewOrderById}></Route>
      <Route path="/couponmanage" exact component={CouponComponent}></Route>
      <Route path="/addcoupon" exact component={AddCoupon}></Route>
      <Route path="/getallcoupon" exact component={GetAllCoupon}></Route>
      <Route path="/deletecoupon/:id" exact component={DeleteCoupon}></Route>
      <Route path="/editcoupon" exact component={EditCoupon}></Route>
      <Route path="/pizzamanage" exact component={PizzaComponent}></Route>
      <Route path="/addpizza" exact component={AddPizza}></Route>
      <Route path="/getallpizza" exact component={GetAllPizza}></Route>
      <Route path="/deletepizza/:id" exact component={DeletePizza}></Route>
      <Route path="/updatepizza" exact component={UpdatePizza}></Route>
      <Route path="/ordermanage" exact component={AdminCurrentOrder}></Route>
      <Route path="/adminallorder" exact component={AllOrder}></Route>

      
      <Route path="/getallcustomer" exact component={GetAllCustomer}></Route>
      <Route path="/UpdateCustomer" exact component={UpdateCustomer}></Route>
      <Route path="/userprofile/:id" exact component={RemoveCustomer}></Route>
      <Route path="/register" exact component={AddCustomer}></Route>
      <Route path="/userprofile" exact component={GetById}></Route>
      



      </Switch>
      </Router>
    </div>
      
  );
}

export default App;
