const fs = require('fs').promises;
const talkersList = require('./talkersList');

async function editTalker(req, res) {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const talkers = await talkersList();
    const index = talkers.findIndex((talker) => Number(talker.id) === Number(id));
    const edit = { id: Number(id), name, age, talk };
    talkers[index] = edit;
    console.log(`Esse é o ${id}`);

    await fs.writeFile('./talker.json', JSON.stringify(talkers));

    return res.status(200).json(edit);
}

module.exports = editTalker;