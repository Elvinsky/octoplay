export const createUser = (mail, pass, name, nick) => {
    const user = {
        id: Date.now().toString(),
        email: mail,
        password: pass,
        name: name,
        nickname: nick,
        createdAt: new Date().toLocaleDateString(),
        status: 'user',
    };
    return user;
};
