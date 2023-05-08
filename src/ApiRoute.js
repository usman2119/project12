import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import axios from "axios"
const ApiRoute = () => {
     const { user,getAccessTokenSilently} = useAuth0();
     
     const CallApi=async()=>{
      try{
      const token= await getAccessTokenSilently();
      const response= await axios.get("http://localhost:7000/api",{
        headers:{
          authorization: `Bearer ${token}`
        },
      })
      console.log(response.data)
     }
     catch (error) {
      console.log(error.message)
    }
  }
     return(
    <div>
         <button onClick={CallApi}>call api route</button>
        <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default ApiRoute