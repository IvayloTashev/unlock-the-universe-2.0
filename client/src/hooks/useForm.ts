import type { AuthState } from "../types";
import { useLogin, useRegister } from "./useAuth";

export const useLoginAction = () => {
    const login = useLogin();

    return async (_prevState: any, formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get('password') as string;

        if (!email) {
            return { success: false, error: "Email is required" };
        }

        if (!password) {
            return { success: false, error: "Password is required" };
        }

        try {
            const user: AuthState = await login(email, password);
            return { success: true, user };

        } catch (err: any) {
            return { success: false, error: err.message };
        }
    }
}

export const useRegisterAction = () => {
    const register = useRegister();

    return async (_prevState: any, formData: FormData) => {
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const rePassword = formData.get("rePassword") as string;

        if (!username) {
            return { success: false, error: "Username is required" };
        }

        if (!email) {
            return { success: false, error: "Email is required" };
        }

        if (!password) {
            return { success: false, error: "Password is required" };
        }

        if (!rePassword) {
            return { success: false, error: "Repeat password is required" };
        }

        if (password != rePassword) {
            return { success: false, error: "Password don't mach" };
        }

        try {
            const user: AuthState = await register(email, password);
            return { success: true, user };

        } catch (err: any) {
            return { success: false, error: err.message };
        }

    }

}