export const postUser = (user) => async () => {
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    }).then((r) => r.json());
};
