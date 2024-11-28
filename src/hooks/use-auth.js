import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";

export const useAuth = () => {
    const [state, setState] = useState(useUserContext()) 

    return {
        isAuthenticated: !!state.user,
    }
}