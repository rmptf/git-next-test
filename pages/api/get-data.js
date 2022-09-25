export default async function handler(req, res) {
  const execSync = require('child_process').execSync
  const pythonProcess = execSync('python3 pages/api/python-data.py')

  res.status(200).json({ data: pythonProcess.toString() })
}

