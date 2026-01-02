import {useState} from "react";

import type {UpdateInput} from '../types';
import {update} from "@/features/applications/api/update-application.ts";

export const useUpdateApplication = (onSuccess?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (data: UpdateInput) => {
        setIsLoading(true);
        setError(null);

        try {
            await update(data);
            onSuccess?.();
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Update failed');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        update: execute,
        isLoading,
        error,
    };
};