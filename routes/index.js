const express = require('express');
const services = require('../services/index');

const router = express.Router();

router.get('/', services.talkersList);
router.get('/:id', services.getById);

module.exports = router;