const express = require('express');
const router = express.Router();
const { getLogs, setLogs, updateLog, deleteLog } = require('../../controllers/api/logs')

router.get('/', getLogs);
router.post('/', setLogs);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;