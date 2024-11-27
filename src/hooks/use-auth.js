import { useUserContext } from "../providers/UserProvider";

export const useAuth = () => {
    const [state, setState] = useUserContext()

    return {
        isAuthenticated: !!state.user,
    }
}