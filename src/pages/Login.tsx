import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
    const { login } = useAuth();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
            email: data.get("email"),
            password: data.get("password")
        });
    };

    return (
        <div className="h-screen flex flex-col w-2/4 ml-auto mr-auto justify-center">
            <h1 className="text-center">Logg inn</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
                <input
                    required
                    className="w-full"
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="E-post"
                />
                <input
                    required
                    placeholder="Passord"
                    className="w-full"
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <button type="submit" className="w-full">
                    Logg in
                </button>
                {/* <div>
                    <div>
                        <RouterLink to="/register">Don't have an account? Sign Up</RouterLink>
                    </div>
                </div> */}
            </form>
        </div>
    );
};
