import {useQuery} from "@tanstack/react-query";
import {getApplication} from "@/features/applications/api/get-application";
import type {Application} from "@/features/applications/types.ts";

export const useGetApplication = (id: string) => {
    return useQuery<Application>({
        queryKey: ["applicationCheck", id],
        queryFn: () => getApplication(id),
        enabled: !!id
    });
};
