const db = require('../models')


db.Place.create ([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/first-restaurant.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/second-image.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(error => {
    console.log('Failure!', error)
    process.exit()
})