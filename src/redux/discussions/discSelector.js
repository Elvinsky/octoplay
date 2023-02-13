export const selectDisc = (store) => store.discs.discs;
export const selectDiscViaID = (store, id) =>
    store.discs.discs.filter((disc) => disc.id === id);
export const selectComments = (store) => store.discs.comments;
export const selectDiscError = (store) => store.discs.error;
export const selectDiscLoading = (store) => store.discs.loading;
