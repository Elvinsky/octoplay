export const selectUsers = (store) => store.users;
export const selectActiveUser = (store) => store.activeUser;
export const selectUserViaEmail = (store, email) =>
    store.users.filter((user) => user.email === email);
export const selectUserViaName = (store, name) =>
    store.users.filter((user) => user.name === name);
