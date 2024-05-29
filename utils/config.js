require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORTG || 3001

module.exports = {
  MONGODB_URI,
  PORT,
}
