   import React from 'react'
   import { useLocation } from 'react-router-dom'

   const Home2 = () => {
       const location=useLocation()
     return (
    
           <p style={{
             textTransform:"uppercase"
           }}>{location.state.id}</p>
    
     )
   }

   export default Home2