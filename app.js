const express = require('express')
const app = express()
const logger = require('./utils/logger')
const notesRouter = require('./controllers/notes')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:', request.path)
  logger.info('Body:', request.body)
  logger.info('---')
  next()
}

const cors = require('cors')

app.use(cors())

app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)

app.use('/api/notes', notesRouter)

const unknownEndpoint = (request, response, next) => {
  response.status(404).send({
    error: 'unknown endpoint',
  })
}

// handler of requests with unkown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

//handler of requests with result to errors
app.use(errorHandler)

module.exports = app
