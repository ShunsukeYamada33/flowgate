import type {RegisterInput} from "@/features/applications/types";


export const register = async (input: RegisterInput) => {

    const res = await fetch('/api/app/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Register failed');
    return res.json();
};