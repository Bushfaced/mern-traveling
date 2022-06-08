const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

router.get('/', logsCtrl.index);
router.get('/:id', logsCtrl.show);
//createLog route
//deleteLog route
//updateLog route


module.exports = router;