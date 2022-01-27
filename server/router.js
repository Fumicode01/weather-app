const express = require('express');
const fetch = require('node-fetch');
// import fetch from 'node-fetch';

let router = express.Router();

router.get('/', async (req, res) => {
    const location = await req.headers.location
    const key = process.env.API_KEY
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&api=yes&alerts=no`

    await fetch(url)
        .then(async (response) => {
            const data = await response.json()
            res.status(200).json(data)
        }).catch(error => res.status(400).json(error))
})


module.exports = router;