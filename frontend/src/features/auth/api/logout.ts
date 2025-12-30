export const logout = async () => {
    localStorage.removeItem('access_token');
};