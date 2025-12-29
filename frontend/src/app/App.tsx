import Router from "@/app/Router";
import {AppProvider} from "@/app/Provider";

export const App = () => {
    return (
        <AppProvider>
            <Router/>
        </AppProvider>
    );
};