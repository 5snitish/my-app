import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import {UserContext} from './context/UserProvider'
const Home = () => {
const usehistory = useHistory()
const userContext = useContext(UserContext)
const {user} = userContext
console.log(userContext)
if (userContext.loginstatus===false){
    usehistory.push("/login")
}else{
    return (
        <div className = 'home'>


      <h3>{user.id}</h3>
      <h4>{user.username}</h4>
      <a href = "/login"><Button type="submit" variant="contained" color="secondary">
              LOGOUT
            </Button></a>
        </div>
    )
}}

export default Home
