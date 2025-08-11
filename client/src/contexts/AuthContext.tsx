import { createContext, useContext, useState } from "react";
import type { AuthContextType, AuthProviderProps, AuthState } from "../types";

export const AuthContext = createContext<AuthContextType>({
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: () => {},
  localLogout: () => {},
});

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({});

  const changeAuthState = (state: AuthState) => {
    if (state.accessToken) {
      localStorage.setItem("accessToken", state.accessToken);
    }
    setAuthState(state);
  };

  const localLogout = () => {
    setAuthState({});
    localStorage.removeItem("accessToken");
  };

  const contextData: AuthContextType = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
    localLogout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
