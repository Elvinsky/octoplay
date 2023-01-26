const BASE_URL = 'http://localhost:5000/';
export const getUsers = async () => {
    const users = await fetch(BASE_URL + 'users').then((r) => r.json());
    return {users};
};
export const getNews = async () => {
    const news = await fetch(BASE_URL + 'news').then((r) => r.json());
    return {news};
};
export const getNewsById = async (newsId) => {
    const news = await fetch(BASE_URL + `news?id=${newsId}`).then((r) =>
        r.json()
    );
    return {news};
};
export const postUser = (user) => {
    fetch(BASE_URL + 'users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    }).then((r) => r.json());
};
export const postNews = (news) => {
    fetch(BASE_URL + 'news', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(news),
    }).then((r) => r.json());
};
