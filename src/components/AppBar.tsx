import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Page {
    label: string;
    path: string;
}

type AppbarProps = {
    pages: Array<Page>;
};

export const AppBar = ({ pages }: AppbarProps) => {
    const { user, logout } = useAuth();

    return (
        <nav className="mb-6">
            <ul className="flex flex-row max-w-screen-lg ml-auto mr-auto gap-4 justify-center items-center">
                {pages?.map((page) => (
                    <li key={page.label}>
                        <Link to={page.path}>{page.label}</Link>
                    </li>
                ))}

                {!!user && (
                    <button className="ml-auto" onClick={logout}>
                        Logout
                    </button>
                )}
            </ul>
        </nav>
    );
};
