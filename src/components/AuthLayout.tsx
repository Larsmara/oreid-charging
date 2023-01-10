import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import { ChargerDataProvider } from "../hooks/useChargerData";

export const AuthLayout = () => {
    const outlet = useOutlet();

    const { userPromise }: any = useLoaderData();
    return (
        <Suspense fallback={<p>loading..</p>}>
            <Await
                resolve={userPromise}
                errorElement={<p>Something went wrong!</p>}
                children={(user) => (
                    <AuthProvider userData={user}>
                        <ChargerDataProvider>
                            <div data-theme="pink" className="max-w-screen-lg ml-auto mr-auto p-6">{outlet}</div>
                        </ChargerDataProvider>
                    </AuthProvider>
                )}
            />
        </Suspense>
    );
};
