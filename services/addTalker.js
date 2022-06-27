const fs = require('fs').promises;
const list = require('./talkersList');

const addTalker = async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const talkersList = await list();
    console.log(talkersList);
    const id = (talkersList[talkersList.length - 1].id) + 1;
    talkersList.push({ id, name, age, talk: { watchedAt, rate } });
    console.log(talkersList);

    await fs.writeFile('./talker.json', JSON.stringify([talkersList[talkersList.length - 1]]));

    return res.status(201).json(talkersList[talkersList.length - 1]);
};

module.exports = addTalker;
