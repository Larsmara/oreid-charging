import { useState } from "react";
import { redirect } from "react-router-dom";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        redirect("/");
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="mb-6">Logg inn</h1>
            <div className="flex flex-col gap-4 w-80">
                <input
                    type="text"
                    placeholder="E-post"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Passord"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button className="w-full" onClick={handleLogin}>
                    Logg inn
                </button>
            </div>
        </div>
    );
}

export default App;
