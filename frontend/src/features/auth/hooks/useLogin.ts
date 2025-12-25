import {useState} from 'react';
import {login} from '../api/login';
import type {LoginInput} from '../types';

export const useLogin = (onSuccess?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (data: LoginInput) => {
        setIsLoading(true);
        setError(null);

        try {
            await login(data);
            onSuccess?.();
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Login failed');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        login: execute,
        isLoading,
        error,
    };
};
