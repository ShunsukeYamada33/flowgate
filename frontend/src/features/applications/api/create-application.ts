import type {RegisterInput} from "@/features/applications/types";

/**
 * 申請データの新規作成
 * @param input id
 */
export const register = async (input: RegisterInput) => {

    const res = await fetch('/api/app/register-application', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Register failed');
    return res.json();
};