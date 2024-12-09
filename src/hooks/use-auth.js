import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";

export const useAuth = () => {
    const [state, setState] = useState(localStorage.getItem("user")) 

    return {
        isAuthenticated: !!state,
    }
}