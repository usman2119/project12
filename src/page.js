import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Page = () => {
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();

  return(
    <div className="login">
     {isAuthenticated ? <li>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
     </li>:
     <button onClick={() => loginWithRedirect()}>Log In</button>
   }
     </div>
  )
};

export default Page;