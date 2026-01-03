import {useState} from "react";

import {register} from '../api/create-application';
import type {RegisterInput} from '../types';

/**
 * 申請を登録するフック
 * @param onSuccess 作成されたapplication_idを渡す
 */
export const useRegister = (onSuccess?: (id: string) => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (data: RegisterInput) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await register(data);
            onSuccess?.(res.id);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Register failed');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        register: execute,
        isLoading,
        error,
    };
};