const express = require('express');
const services = require('../services/index');

const talkersRouter = express.Router();

talkersRouter.get('/', services.talkersList);
talkersRouter.get('/:id', services.getById);

module.exports = talkersRouter;