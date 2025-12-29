export const me = async () => {

    const res = await fetch('/auth/me', {
        method: 'GET',
        credentials: 'include',
    });

    if (!res.ok) throw new Error('Failed to fetch user');
    return res.json();
};