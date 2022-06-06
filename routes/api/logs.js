const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', logsCtrl.getAll, ensureLoggedIn);
router.post('/', logsCtrl.create, ensureLoggedIn);