import React, { useState,useContext } from "react";
import "./Login.css";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LockIcon from "@material-ui/icons/Lock";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import {useHistory,Link} from "react-router-dom";
import {UserContext} from './context/UserProvider'

 
 
const Login = () => {



  const userContext = useContext(UserContext)

  const {UserData} = userContext
  const history = useHistory();
  const url = "https://articles-backend-api.herokuapp.com/api/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    let username = e.target.value;

    setUsername(username);
  };
  const changePassword = (e) => {
    let password = e.target.value;

    setPassword(password);
  };

  const loginUser = (e) => {
    e.preventDefault();

 axios.post (url+"login/",{username:username, password:password}).then(function(success){
      if (success.status===200){

        UserData(success.data.user)
          window.alert("login sucessfull")
         history.push("/home")
      console.log(success)
         
          
         
        
      

      }
 }).catch(function (error){
  if (error.response.status===400){
    window.alert(error.response.data.detail)
    console.log(error.response)
  }
     
 })

  };

  return (
    <>
      <div className="container">
        <div className="login-tittle">LOGIN</div>
        <div className="login">
          <form onSubmit={loginUser}>
            <div className="username">
              <AssignmentIndIcon></AssignmentIndIcon>

              <input
                type="text"
                name="username"
                value={username}
                onChange={changeUsername}
              ></input>
            </div>
            <div className="password">
              <LockIcon></LockIcon>

              <input
                type="password"
                name="password"
                value={password}
                onChange={changePassword}
              ></input>
            </div>
            <Button type="submit" variant="contained" color="primary">
              LOGIN
            </Button>
            <Link to='register'> Not Registerd? </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
