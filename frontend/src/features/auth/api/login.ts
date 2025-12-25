import type {LoginInput} from "@/features/auth/types.ts";


export const login = async (input: LoginInput) => {

    const res = await fetch('/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();
    localStorage.setItem('token', data.access_token);
    return data;
};