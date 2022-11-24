import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { Report } from "./pages/Report";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthLayout } from "./components/AuthLayout";

// ideally this would be an API call to server to get logged in user data

const getUserData = () =>
    new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user");
            resolve(user);
        }, 500)
    );

// for error
// const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<AuthLayout />}
            errorElement={<p>Error</p>}
            loader={() => defer({ userPromise: getUserData() })}
        >
            <Route element={<ProtectedLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/rapport" element={<Report />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
        </Route>
    )
);
