 import Register from './Register'
import './App.css';
import Login from './Login';
import UserProvider from './context/UserProvider'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
function App() {
  return (
     <>
     <Router>
    <Switch>
           
          <Route path="/home">
          <UserProvider>
            <Home />
            </UserProvider>
          </Route>
          
          <Route path="/register">
            <Register />
          </Route>
          
          <Route path="/">
          <UserProvider>
            <Login />
            </UserProvider>
          </Route>
        </Switch>
       
    </Router>
     </>
  );
}

export default App;
