import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch, useLocation} from 'react-router-dom';
import Login from './components/Login';

import UserComponent from './components/user/UserComponent';
import AdminComponent from './components/admin/AdminComponent';
import Order from './components/user/Order';
import ViewCurrentOrders from './components/user/ViewCurrentOrders';
import UpdateOrder from './components/user/UpdateOrder';
import OrderHistory from './components/user/OrderHistory';
import ViewOrderById from './components/user/ViewOrderById';


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

      </Switch>
      </Router>
    </div>
      
  );
}

export default App;
