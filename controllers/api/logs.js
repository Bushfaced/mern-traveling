const Item = require('../../models/log');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const logs = await Log.find({}).sort('timestamp').exec();
  logs.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(logs);
}

async function show(req, res) {
  const log = await Log.findById(req.params.id);
  res.json(log);
}
