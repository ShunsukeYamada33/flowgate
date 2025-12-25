import {Routes, Route, Navigate} from "react-router-dom";
import {paths} from "@/config/paths.ts";
import RegisterPage from "@/app/routes/login/RegisterPage";
import LoginPage from "@/app/routes/login/LoginPage";

function Router() {
    return (
        <Routes>
            <Route path={paths.home.path} element={<Navigate to={paths.auth.login.getHref()} replace/>}/>
            <Route path={paths.auth.login.path} element={<LoginPage/>}/>
            <Route path={paths.auth.register.path} element={<RegisterPage/>}/>
        </Routes>
    );
}

export default Router;
