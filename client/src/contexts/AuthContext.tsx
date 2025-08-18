import { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType, AuthProviderProps, AuthState } from "../types";
import { getUserDetails } from "../api/authAPI";

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

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("accessToken");
      
      if (!token) {
        return;
      }

      try {
        const user = await getUserDetails();
        setAuthState({ ...user, accessToken: token });
      } catch {
        localStorage.removeItem("accessToken");
      }
    })();
  }, []);

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
