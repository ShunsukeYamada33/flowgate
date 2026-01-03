import type {QueryClient} from "@tanstack/react-query";
import {type ActionFunction, createBrowserRouter, type LoaderFunction} from "react-router-dom";
import {paths} from "@/config/paths";
import {ProtectedRoute} from "@/lib/ProtectedRoute";
import type {ComponentType} from "react";
import AppRoot from "@/app/routes/app/Root";
import ErrorPage from "@/app/routes/ErrorPage";

type LazyRouteModule = {
    default: ComponentType;
    clientLoader?: (queryClient: QueryClient) => LoaderFunction;
    clientAction?: (queryClient: QueryClient) => ActionFunction;
};

const convert = (queryClient: QueryClient) => (m: LazyRouteModule) => {
    const {clientLoader, clientAction, default: Component, ...rest} = m;
    return {
        ...rest,
        loader: clientLoader?.(queryClient),
        action: clientAction?.(queryClient),
        Component,
    };
};

export const createAppRouter = (queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: paths.home.path,
            lazy: () => import('./routes/Landing').then(convert(queryClient)),
        },
        {
            path: paths.auth.register.path,
            lazy: () => import('./routes/auth/RegisterPage').then(convert(queryClient)),
        },
        {
            path: paths.auth.login.path,
            lazy: () => import('./routes/auth/LoginPage').then(convert(queryClient)),
        },
        {
            path: paths.app.root.path,
            element: (
                <ProtectedRoute>
                    <AppRoot/>
                </ProtectedRoute>
            ),
            children: [
                {
                    path: paths.app.applications.path,
                    lazy: () => import('./routes/app/ApplicationsPage').then(convert(queryClient)),
                },
                {
                    path: paths.app.applicationRegister.path,
                    lazy: () => import('./routes/app/ApplicationRegisterPage').then(convert(queryClient)),
                },
                {
                    path: paths.app.applicationCheck.path,
                    lazy: () => import('./routes/app/ApplicationCheckPage').then(convert(queryClient)),
                },
                {
                    path: paths.app.applicationEdit.path,
                    lazy: () => import('./routes/app/ApplicationEditPage').then(convert(queryClient)),
                },
            ],
            errorElement: <ErrorPage/>,
        },
        {
            path: paths.error.root.path,
            lazy: () => import('./routes/ErrorPage').then(convert(queryClient)),
        }
    ]);