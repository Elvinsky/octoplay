const BASE_URL = 'http://localhost:5000/';
export const getUsers = async () => {
    const users = await fetch(BASE_URL + 'users').then((r) => r.json());
    return {users};
};
export const getNews = async () => {
    const news = await fetch(BASE_URL + 'news').then((r) => r.json());
    return {news};
};
