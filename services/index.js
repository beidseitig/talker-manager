const fs = require('fs').promises;

async function talkersList(req, res) {
    const list = await fs.readFile('./talker.json', 'utf8');
    const talkers = JSON.parse(list);
    return res.status(200).json(talkers);
}

async function getById(req, res) {
    const { id } = req.params;
    const list = await fs.readFile('./talker.json', 'utf8');
    const talkers = JSON.parse(list);
    
    const result = talkers.find((talker) => talker.id === Number(id));

    if (!result) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    return res.status(200).json(result);
}

module.exports = { talkersList, getById };