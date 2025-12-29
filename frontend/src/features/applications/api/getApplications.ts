import type {Application} from "../types";

export const getApplications = async (): Promise<Application[]> => {
    const res = await fetch("/api/applications", {
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("failed to fetch app");
    }

    return res.json();
};
