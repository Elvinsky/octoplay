export const selectNews = (store) => store.news.news;
export const selectNewsAmount = (store) => store.news.amount;
export const selectNewsViaID = (store, id) =>
    store.news.news.find((news) => news.id === id);
export const selectNewsError = (store) => store.news.error;
export const selectNewsLoading = (store) => store.news.loading;
