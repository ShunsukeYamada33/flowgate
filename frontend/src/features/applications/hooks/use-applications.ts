import {useQuery} from "@tanstack/react-query";
import {getApplications} from "../api/get-applications";

/**
 * 申請一覧を取得するフック
 * 一覧は常に最新を表示するため、mount時に必ず再フェッチする
 */
export const useApplications = () => {
    return useQuery({
        queryKey: ["applications"],
        queryFn: getApplications,
        refetchOnMount: "always",
    });
};
