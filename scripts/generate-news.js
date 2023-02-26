module.exports = function getNewsRecord() {
    return {
        id: random(),
        title: random(),
        content: Array.from({length: 1000})
            .map(() => random())
            .join(' '),
        liked: randomNumber(),
        watched: randomNumber(),
        thumbnailPic: 'https://via.placeholder.com/390x200',
        fullsizePic: 'https://via.placeholder.com/500',
        createdAt: new Date().toString(), // Better Date.now() to get only timestamp
    };
};

function random() {
    return Math.random().toString(36).substring(2);
}

function randomNumber() {
    return Math.trunc(Math.random() * 100);
}
