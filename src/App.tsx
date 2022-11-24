import { useEffect, useState } from "react";
import { Outlet, redirect } from "react-router-dom";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) {
            redirect("/");
        } else {
            redirect("/login");
        }
    }, []);

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="mb-6">Home</h1>
            <Outlet />
        </div>
    );
}

export default App;
