const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const app = express()

// logging
const logFormat = '[:date[iso]] :method :url :status :response-time ms - :res[content-length]'
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// middleware
app.use(morgan(logFormat, { stream: accessLogStream }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send(`hello world ${String.fromCodePoint(0x1F433)}`)
})

app.listen(3000, () => {
  console.log('server running on 3000')
})