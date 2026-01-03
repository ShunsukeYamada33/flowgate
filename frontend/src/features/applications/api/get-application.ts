import type {Application} from "../types";

/**
 * idに紐づく申請データの詳細を取得
 * @param id application_id
 */
export const getApplication = async (id: string): Promise<Application> => {
    const res = await fetch("/api/app/application-check", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({id})
    });

    if (!res.ok) {
        throw new Error("failed to fetch app");
    }

    return res.json();
};
