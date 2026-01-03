import {FetchError} from "@/lib/fetch-error";

/**
 * ログイン済みかチェック
 */
export const me = async () => {

    const res = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });

    if (!res.ok) throw new FetchError(res.status, 'Unauthorized');
    return res.json();
};