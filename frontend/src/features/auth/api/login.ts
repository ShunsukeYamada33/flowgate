import type {LoginInput} from "@/features/auth/types";


export const login = async (input: LoginInput) => {

    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();
    localStorage.setItem('access_token', data.access_token);
    return data;
};