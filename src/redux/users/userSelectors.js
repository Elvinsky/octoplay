export const selectUsers = (store) => store.users.users;
export const selectActiveUser = (store) => store.users.activeUser;
export const selectUserViaEmail = (store, email) =>
    store.users.users.filter((user) => user.email === email);
export const selectUserViaName = (store, name) =>
    store.users.users.filter((user) => user.name === name);
