import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const index = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      loginWithRedirect();
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>You are logged in!</p>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
};

export default index;
