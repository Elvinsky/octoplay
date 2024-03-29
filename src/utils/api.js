const BASE_URL = 'http://localhost:5000/';

const handleFetchResponse = async (response) => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return response.json();
};

const fetchData = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        return await handleFetchResponse(response);
    } catch (error) {
        console.error(error);
    }
};

//-----------------------NEWS API-----------------------------
export const deleteNews = (newsId) =>
    fetchData(`${BASE_URL}news/${newsId}`, {
        method: 'DELETE',
    });
export const getNews = () => fetchData(`${BASE_URL}news`);
export const getRecentNews = () => fetchData(`${BASE_URL}news?_limit=6`);
export const getNewsById = (newsId) => fetchData(`${BASE_URL}news/${newsId}`);
export const postNews = (news) =>
    fetchData(`${BASE_URL}news`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(news),
    });
export const patchNews = (news, newsID) => {
    fetch(`${BASE_URL}news/${newsID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(news),
    })
        .then((response) => response.json())
        .catch((error) => console.error('Error:', error));
};
export const getPaginatedNews = async (start, end) => {
    const news = await fetch(
        `${BASE_URL}news?_start=${start}&_end=${end}`
    ).then((r) => r.json());
    const amount = await fetch(
        `${BASE_URL}news?_start=${start}&_end=${end}`
    ).then((r) => parseInt(r.headers.get('X-Total-Count')));
    return [news, amount];
};
//-----------------------USERS API-----------------------------
export const getUsers = () => fetchData(`${BASE_URL}users`);
export const postUser = (user) =>
    fetchData(`${BASE_URL}users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    });

//-----------------------DISCUSSION API-----------------------------
export const getDisc = () => fetchData(`${BASE_URL}discussions`);
export const getPaginatedDiscussions = async (start, end) => {
    const discussions = await fetch(
        `${BASE_URL}discussions?_start=${start}&_end=${end}`
    ).then((r) => r.json());
    const amount = await fetch(
        `${BASE_URL}discussions?_start=${start}&_end=${end}`
    ).then((r) => parseInt(r.headers.get('X-Total-Count')));
    return [discussions, amount];
};
export const getRecentDisc = () => fetchData(`${BASE_URL}discussions?_limit=5`);
export const getDiscById = (id) => fetchData(`${BASE_URL}discussions/${id}`);
export const getComments = (id) =>
    fetchData(`${BASE_URL}discussions/${id}/comments`);

export const postDisc = (disc) =>
    fetchData(`${BASE_URL}discussions`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(disc),
    });
export const postComment = (discId, comment) =>
    fetchData(`${BASE_URL}discussions/${discId}/comments`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(comment),
    });
export const deleteDisc = (id) => {
    fetchData(`${BASE_URL}discussions/${id}`, {
        method: 'DELETE',
    });
};
export const patchDisc = (disc, id) => {
    fetch(`${BASE_URL}discussions/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(disc),
    })
        .then((response) => response.json())
        .catch((error) => console.error('Error:', error));
};
