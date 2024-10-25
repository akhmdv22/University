const express = require('express');
const { register, login } = require('../Controller/Auth');

const router = express.Router();

router.post('/admin/register', register );
router.post('/admin/login', login);

module.exports = router;