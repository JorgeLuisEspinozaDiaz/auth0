import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ returnTo: "http://localhost:3000" })}>
      salir
    </button>
  );
};

export default Logout;
