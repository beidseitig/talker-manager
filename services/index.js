const talkersList = require('./talkersList');
const returnList = require('./returnList');
const getById = require('./getById');
const generateToken = require('./generateToken');
const addTalker = require('./addTalker');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');

module.exports = { 
    talkersList, 
    getById, 
    generateToken, 
    addTalker, 
    returnList, 
    editTalker, 
    deleteTalker };