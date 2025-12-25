import {useState} from "react";

import {register} from '../api/register';
import type {RegisterInput} from '../types';

export const useRegister = (onSuccess?: (email: string) => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (data: RegisterInput) => {
        setIsLoading(true);
        setError(null);

        try {
            await register(data);
            onSuccess?.(data.email);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Login failed');
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