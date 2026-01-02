import type {Application} from "../types";

export const getApplication = async (id: string): Promise<Application> => {
    const res = await fetch("/api/app/applications", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(id)
    });

    if (!res.ok) {
        throw new Error("failed to fetch app");
    }

    return res.json();
};
