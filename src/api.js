export const getUsers = async () => {
    const users = await fetch('http://localhost:5000/users').then((r) =>
        r.json()
    );
    return {users};
};
