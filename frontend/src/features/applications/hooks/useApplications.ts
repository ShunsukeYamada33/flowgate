import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../api/getApplications";

export const useApplications = () => {
    return useQuery({
        queryKey: ["applications"],
        queryFn: getApplications,
    });
};
