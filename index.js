require('dotenv').config()
const dotenv = require('dotenv')
const express = require("express")
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
const cors = require('cors')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.set('trust proxy', true)
app.use('/api', router)

const start = async () => {
  try {
    app.listen(PORT, () => console.log("server startedsfd " + PORT))
  } catch (e) {
    console.log(e)
  }
}

start()