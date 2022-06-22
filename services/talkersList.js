const fs = require('fs').promises;

async function talkersList(req, res) {
    const list = await fs.readFile('./talker.json', 'utf8');
    const talkers = JSON.parse(list);
    return res.status(200).json(talkers);
}

module.exports = talkersList;