const getLogs = (req, res) => {
  res.status(200).json({ message: 'Get Logs' })
}

const setLogs = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please Add Text')
  }
  res.status(200).json({ message: 'Set Logs' })
}

const updateLog = (req, res) => {
  res.status(200).json({ message: `Update Log ${req.params.id}` })
}

const deleteLog = (req, res) => {
  res.status(200).json({ message: `Delete Log ${req.params.id}` })
}

module.exports = {
  getLogs,
  setLogs,
  updateLog,
  deleteLog,
}