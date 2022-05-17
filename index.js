require('dotenv').config()
const express = require('express')
const placesRoutes = require('./controllers/places')
const app = express()

app.use('/places', placesRoutes)

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
