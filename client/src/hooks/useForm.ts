import type { AuthState } from "../types";
import { useLogin } from "./useAuth";

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