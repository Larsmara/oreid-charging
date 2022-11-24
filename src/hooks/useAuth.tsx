import { createContext, ReactElement, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext<any | null>(null);

export const AuthProvider = ({ children, userData }: { children: ReactElement; userData: any }) => {
    const [user, setUser] = useLocalStorage("user", userData);
    const navigate = useNavigate();

    const login = async (data: any) => {
        setUser(data);
        navigate("/", { replace: true });
    };

    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
