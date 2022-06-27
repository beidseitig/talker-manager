const express = require('express');
const services = require('../services/index');
const validations = require('../services/validations');

const talkersRouter = express.Router();

talkersRouter.get('/', services.returnList);
talkersRouter.get('/:id', services.getById);
talkersRouter.post('/',
    validations.tokenValidation,
    validations.nameValidation,
    validations.ageValidation,
    validations.talkValidation,
    validations.watchedValidation,
    validations.rateValidation,
    services.addTalker);

module.exports = talkersRouter;