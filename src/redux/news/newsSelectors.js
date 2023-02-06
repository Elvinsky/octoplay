export const selectNews = (store) => store.news.news;
export const selectNewsViaID = (store, id) =>
    store.news.news.filter((news) => news.id === id);
export const selectNewsError = (store) => store.news.error;
export const selectNewsLoading = (store) => store.news.loading;
