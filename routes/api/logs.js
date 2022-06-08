const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

// GET /api/items
router.get('/', logsCtrl.index);
// GET /api/items/:id
router.get('/:id', logsCtrl.show);

module.exports = router;