import {useState} from "react";

import {register} from '../api/create-application';
import type {RegisterInput} from '../types';

export const useRegister = (onSuccess?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (data: RegisterInput) => {
        setIsLoading(true);
        setError(null);

        try {
            await register(data);
            onSuccess?.();
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