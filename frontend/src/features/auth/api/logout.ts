export const logout = async () => {

    const res = await fetch('/auth/logout', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });

    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();
    localStorage.setItem('token', data.access_token);
    return data;
};