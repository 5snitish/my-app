import React,{useState} from 'react'
import {useHistory} from "react-router-dom";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import './register.css'



const Register = () => {
    const usehistory  = useHistory()
    const url="https://articles-backend-api.herokuapp.com/api/";
    const[email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")

    const onChangeEmail = (e)=>{
        const email = e.target.value
        setEmail(email)
    }

    const onChangeFirstname = (e)=>{
        const firstname = e.target.value
        setFirstname(firstname)
    
    }

    const onChangelastname = (e)=>{
        const lastname = e.target.value
        setLastname(lastname)
    }


    const onChangePassword = (e)=>{
        const password = e.target.value
        setPassword(password)
    }
    
    
const Register=(e)=>{
    e.preventDefault()
    axios.post (url+"register/",{
        username:email,
        email:email,
        password:password,
        first_name:firstname,
        last_name:lastname,
    }).then(function(success){
       
        if (success.status===200){
            window.alert(success.data.user.username + "sucessfully registerd redirecting to login")
            usehistory.push("/login")
        }
    }).catch(function(error){
         
        if (error.response.status===400){
            window.alert(error.response.data.username)}
    })
  

}

    return (
        <div className='body'>
        <div className="register">
        <div className="register_tittle"> REGISTER </div>
           <form onSubmit={Register}>
           <div className="username1">
             <label>Enter Email</label>

              <input id="i1"
                type="text"
                name="email"
                value={email}
                onChange={onChangeEmail}
                
              ></input>
            
            <label>Enter password</label>

              <input
                type="password"
                name="password"
                value=  {password}
                onChange={onChangePassword}
              ></input>
            </div>
            <div className="username1">
             <label>Enter Firstname</label>

              <input
                type="text"
                name="firstname"
                value=  {firstname}
                onChange={onChangeFirstname}
                
              ></input>
            
             <label>Enter Lastname</label>

              <input
                type="text"
                name="lastname"
                value=  {lastname}
                onChange={onChangelastname}
              ></input>
            </div>
            <Button type="submit" variant="contained" color="primary">
              For Registrataion
            </Button>


           </form>  
        </div>
        </div>
    )
}

export default Register
