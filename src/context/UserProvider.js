import React, { createContext, useReducer } from "react";

const USER = "USER"

export const UserContext = createContext();

const UserReducer = (state, action) => {
  switch (action.type)
   {
    case USER :
        return{
        ...state,
        loginstatus:true,
        user:action.payload

    }   
    default:
      return state;
  }
};

const UserProvider = (props) => {
    const initialState = {
      user: 
      {},
      loginstatus:false
    }
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
    // ACTIONS


 const UserData = (user)=>{
     dispatch({
         type:USER,
         payload:user
     })

 }

     
    return (
      <UserContext.Provider
        value={{
          user: state.user,
          loginstatus:state.loginstatus,
          UserData,
          
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
  };
  
  export default UserProvider;
