const fs = require('fs').promises;

async function talkersList() {
    const list = await fs.readFile('./talker.json', 'utf8');
    const talkers = JSON.parse(list);
    return talkers;
}

module.exports = talkersList;