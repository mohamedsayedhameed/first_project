const mockAPIResponse = require('./mockAPI.js')
const PORT = 8082
const fetch = require('node-fetch')

// Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

// TODO: Create an instance for the server
const express = require('express')
const app = express()

// Configure cors to avoid cors-origin issue
const cors = require('cors')
app.use(cors())

// Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

// Configure express static directory.
app.use(express.static('dist'))

// meaningcloud ulr
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1';
// api key
const KEY = process.env.API_KEY ;



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/getdata', async(req, res)=>{
    console.log(req.body.url)
    const API_URL = `${BASE_API_URL}?key=${KEY}&url=${req.body.url}&lang=en`
    console.log(API_URL)
    const response = await fetch(API_URL)
    const data = await response.json()
    res.send(data)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
