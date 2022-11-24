import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <p>ERROR</p>,
        children: [
            {
                errorElement: <div>Oops! There was an error.</div>,
                children: [{ index: true, element: <h1>Index page</h1> }]
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <p>Error</p>
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
