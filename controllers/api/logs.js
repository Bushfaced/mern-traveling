const Log = require('../../models/log');

module.exports = {
  index,
  show,
  create,
  deleteLog,
};

async function index(req, res) {
  const logs = await Log.find({user: req.user._id}).sort('-createdAt').exec();
  res.json(logs);
}

async function show(req, res) {
  const logs = await Log.findById(req.params.id);
  res.json(logs);
}

async function create(req, res) {
  req.body.user = req.user._id;
  const log = await Log.create(req.body);
  res.json(log)
}

async function deleteLog(req, res) {
  req.body.user = req.user._id;
  const log = await Log.deleteLog(req.body);
  res.json(log)
}
