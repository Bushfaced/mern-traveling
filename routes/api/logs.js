const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

router.get('/', logsCtrl.index);
router.get('/:id', logsCtrl.show);
//create route
router.post('/', logsCtrl.create)
//deleteLog route
// router.delete('/:id', logsCtrl.deleteLog);
//updateLog route
// router.put('/logs/:id', logsCtrl.updateLog);

module.exports = router;