const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

router.get('/', logsCtrl.index);
router.get('/:id', logsCtrl.show);
router.post('/', logsCtrl.create)
router.delete('/logs/:id', logsCtrl.deleteLog);

module.exports = router;

