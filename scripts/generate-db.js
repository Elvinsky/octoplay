const generateDiscussion = require('./generate-discussion');
const generateNewsRecord = require('./generate-news');

// relative to package.json
const SERVER_PATH = './server';

const db = JSON.parse(
    require('fs').readFileSync(`${SERVER_PATH}/db.json`).toString()
);

const d = Array.from({length: 10_000}).map(() => generateDiscussion());
db.discussions.push(...d);

const n = Array.from({length: 10_00}).map(() => generateNewsRecord());
db.news.push(...n);

require('fs').writeFileSync(
    `${SERVER_PATH}/huge.json`,
    JSON.stringify(db, null, 4)
);
