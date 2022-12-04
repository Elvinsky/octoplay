export const selectNews = (store) => store.news.news;
export const selectNewsViaID = (store, id) =>
    store.news.news.find((news) => news.id === id);
