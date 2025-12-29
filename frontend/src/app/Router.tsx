import {RouterProvider} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {createAppRouter} from "@/app/CreateAppRouter";


const Router = () => {
    const queryClient = useQueryClient();

    const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

    return <RouterProvider router={router}/>;
};

export default Router;