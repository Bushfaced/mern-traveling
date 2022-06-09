const Log = require('../../models/log');

module.exports = {
  index,
  show,
  // createLog,
  // delete: deleteLog,
  // update: updateLog,
};

async function index(req, res) {
  const logs = await Log.find({user: req.user._id}).sort('-createdAt').exec();
  logs.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(logs);
}

async function show(req, res) {
  const log = await Log.findById(req.params.id);
  res.json(log);
}
