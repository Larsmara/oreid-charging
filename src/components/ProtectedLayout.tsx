import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";
import { LoginPage } from "../pages/Login";

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <AppBar
                pages={[
                    { label: "Home", path: "/" },
                    { label: "Rapport", path: "/rapport" }
                ]}
            />
            {outlet}
        </div>
    );
};
