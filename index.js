require('dotenv').config()
const express = require('express')
const placesRoutes = require('./controllers/places')
const app = express()

// middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// middleware
app.use(express.static('public'))

app.use('/places', placesRoutes)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404)
    res.render('error404')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

