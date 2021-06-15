import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch, useLocation} from 'react-router-dom';
import Login from './components/Login';

import UserComponent from './components/user/UserComponent';
import AdminComponent from './components/admin/AdminComponent';


function App() {
  return (
    <div className="App">
      <Router>
         
      <Switch>

      <Route path="/" exact component={Login}></Route>
      <Route path="/admin" exact component={AdminComponent}></Route>
      <Route path="/user" exact component={UserComponent}></Route>

      </Switch>
      </Router>
    </div>
      
  );
}

export default App;