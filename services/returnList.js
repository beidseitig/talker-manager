const talkersList = require('./talkersList');

async function returnList(_req, res) {
    const talkers = await talkersList();

    return res.status(200).json(talkers);
}

module.exports = returnList;