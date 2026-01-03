import {useQuery} from "@tanstack/react-query";
import {getApplication} from "@/features/applications/api/get-application";
import type {Application} from "@/features/applications/types";

/**
 * idに紐づく申請を取得するフック
 * 最新のステータスを表示するため、mount時に必ず再フェッチする
 * @param id application_id
 */
export const useGetApplication = (id: string) => {
    return useQuery<Application>({
        queryKey: ["applicationCheck", id],
        queryFn: () => getApplication(id),
        enabled: !!id,
        refetchOnMount: "always",
    });
};
