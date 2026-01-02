import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../api/get-applications";

export const useApplications = () => {
    return useQuery({
        queryKey: ["applications"],
        queryFn: getApplications,
    });
};
