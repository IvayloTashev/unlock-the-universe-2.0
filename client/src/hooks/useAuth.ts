import { login, logout, register } from "../api/authAPI";
import { useAuthContext } from "../contexts/AuthContext";
import type { AuthState } from "../types";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email: string, password: string): Promise<AuthState> => {
        const userData = await login(email, password);
        changeAuthState(userData);

        return userData;
    }

    return loginHandler
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email: string, password: string): Promise<AuthState> => {
        const userData = await register(email, password);
        changeAuthState(userData);

        return userData;
    }

    return registerHandler
}

export const useLogout = () => {
    const { localLogout } = useAuthContext();

    const logoutHandler = async () => {
        await logout();
        localLogout()
    }

    return logoutHandler
}
