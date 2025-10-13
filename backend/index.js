const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const cors = require("cors")
const path = require("path")
const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())