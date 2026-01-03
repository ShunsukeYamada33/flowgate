import type {LoginInput} from "@/features/auth/types";

/**
 * ログイン
 *
 * @param {LoginInput} input - email and password.
 * @returns {Promise<Object>} A promise that resolves to the server's response in JSON format.
 * @throws {Error} Throws an error if the login request fails.
 */
export const login = async (input: LoginInput) => {

    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Login failed');
    return res.json();
};