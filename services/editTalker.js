// const fs = require('fs').promises;
// const list = require('./talkersList');

// async function getById(req, res) {
//     const { id } = req.params;
//     const { name, age, talk: { watchedAt, rate } } = req.body;
//     const talkers = await list();
    
//     const result = talkers.find((talker) => talker.id === Number(id));

//     if (!result) {
//         return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
//     }

//     return res.status(200).json(result);
// }

// module.exports = getById;