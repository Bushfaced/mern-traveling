async function getAll(req, res) {
  const logs = await Log.find({
    user: req.user._id
  });
  res.json(logs);
}

async function create(req, res) {
  req.body.user = req.user._id;
  const post = await Log.create(req.body);
}