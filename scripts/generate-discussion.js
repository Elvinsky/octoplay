module.exports = function getNewsRecord() {
    return {
        id: random(),
        title: random(),
        content: Array.from({length: 1000})
            .map(() => random())
            .join(' '),
        liked: randomNumber(),
        watched: randomNumber(),
        thumbnailPic:
            'https://via.placeholder.com/130x130?text=Discussion+Placeholder',
        fullsizePic: '',
        createdAt: new Date().toString(),
        author: random(),
    };
};

function random() {
    return Math.random().toString(36).substring(2);
}

function randomNumber() {
    return Math.trunc(Math.random() * 100);
}
