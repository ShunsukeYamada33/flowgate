import type {RegisterInput} from "@/features/auth/types";

/**
 * ユーザー登録
 * @param input - email and password. role
 */
export const register = async (input: RegisterInput) => {

    const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Register failed');
    return res.json();
};