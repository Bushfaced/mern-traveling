const express = require('express');
const router = express.Router();
const { getLogs, setLogs, updateLog, deleteLog } = require('../../controllers/api/logs')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', getLogs, ensureLoggedIn);
router.post('/', setLogs, ensureLoggedIn);
router.put('/:id', updateLog, ensureLoggedIn);
router.delete('/:id', deleteLog, ensureLoggedIn);


module.exports = router;