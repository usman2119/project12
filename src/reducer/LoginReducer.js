 import React from 'react'
 const LoginReducer = (state, action) => {
     if (action.type === "LOGIN_DETAILS") {
         let { username } = action.payload;
          console.log(username)
          let LoginDetails;
           LoginDetails={
           
             username
          }
         }
          return{
           ...state,
           Login:[...state.Login],
          }

    return state;
 }

 export default LoginReducer