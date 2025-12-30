import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as React from 'react';
import {AuthLoader} from "@/lib/Auth";
import {queryConfig} from "@/lib/react-query";
import {Spinner} from "@/components/ui/Spinner";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({children}: AppProviderProps) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig,
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <AuthLoader renderLoading={() => (<Spinner/>)}>
                {children}
            </AuthLoader>
        </QueryClientProvider>
    );
};