import React from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

const Logout = () => {
  const logout = useLogout();

  logout();

  return (
    <div>
      <Navigate to={"/"} />
    </div>
  );
};

export default Logout;
