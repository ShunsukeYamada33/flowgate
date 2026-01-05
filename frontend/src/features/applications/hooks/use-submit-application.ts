import {useState} from "react";

import type {SubmitInput} from '../types';
import {submit} from "@/features/applications/api/update-application";

/**
 * 申請を更新するフック
 * @param onSuccess 更新成功時に実行する関数
 */
export const useSubmitApplication = (onSuccess?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (data: SubmitInput) => {
        setIsLoading(true);
        setError(null);

        try {
            await submit(data);
            onSuccess?.();
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Update failed');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        submit: execute,
        isLoading,
        error,
    };
};