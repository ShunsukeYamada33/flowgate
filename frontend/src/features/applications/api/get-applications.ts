import type {Application} from "../types";

/**
 * ログインしているユーザの申請データを全て取得
 */
export const getApplications = async (): Promise<Application[]> => {
    const res = await fetch("/api/app/applications", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        });

    if (!res.ok) {
        throw new Error("failed to fetch app");
    }

    return res.json();
};
