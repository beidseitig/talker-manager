const express = require('express');
const middlewares = require('../middlewares/index');

const loginRouter = express.Router();

loginRouter.post('/', middlewares.authMiddleware);

module.exports = loginRouter;