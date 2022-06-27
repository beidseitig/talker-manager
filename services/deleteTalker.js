const fs = require('fs').promises;
const talkersList = require('./talkersList');

async function deleteTalker(req, res) {
    const { id } = req.params;
    const talkers = await talkersList();
    const index = talkers.findIndex((talker) => Number(talker.id) === Number(id));
    talkers.splice(index, 1);

    await fs.writeFile('./talker.json', JSON.stringify(talkers));

    return res.status(204).end();
}

module.exports = deleteTalker;