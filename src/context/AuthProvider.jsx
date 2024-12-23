import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <div>
      <AuthContext.provider value={"kush"}>{children}</AuthContext.provider>
    </div>
  );
};

export default AuthProvider;
