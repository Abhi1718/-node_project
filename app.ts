const express = require("express")
const path = require("path")
const cors = require('cors');
const fs = require('fs');
const app = express()
import { Request, Response, NextFunction } from 'express';
const port = 5000
app.use(
  cors({
    origin: '*',
    methods: ["GET", "PUT"]
  })
)


// Defiening the static to serve the static files,the /static is the url that you can acutally serve the files on the domain
app.use('/static',express.static('static'))
// app.use(express.static(path.join(__dirname, 'static')));

// This is middleware that parses html input form data
app.use(express.urlencoded())

// Setting the view template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "templates"))


app.get('/abhi', function (req:Request, res:Response) {
  res.render('abhi')
})
app.get('/', function (req:Request, res:Response) {
  res.render('index', { title: 'Abhishek', message: 'Abhishek is a good programmer' })
})
app.post('/contact', function (req:Request, res:Response) {
  // console.log(req.body)
  let client = req.body.client
  let phone = req.body.phone
  let email = req.body.email
  let message = req.body.message 
  let outputToWrite = `The name of the client is ${client} and his phone no. is ${phone},${email} is his/her email and his/her concern is ${message}`
  fs.writeFileSync('output.txt',outputToWrite)
  res.render('contact',{submit:"Form has been submitted successfully"})
})

app.get('/contact', function (req:Request, res:Response) {
  res.render('contact')
})

app.get('/sample', function (req:Request, res:Response) {
  res.send({ name: "Abhishek is a good programmer", role: "Good programmer", experiencr: "excellent" })
})

app.get('/services', function (req:Request, res:Response) {
  res.render('services')
})

app.get('/about', function (req:Request, res:Response) {
  res.render('about')
})

app.listen(port, () => {
  console.log(`The server is running on ${port}`)
})
