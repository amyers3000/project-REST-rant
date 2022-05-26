const router = require('express').Router()
const db = require('../models')



router.get('/', async(req,res) => {
    try {
      const places = await db.Place.find()
      res.render('places/index', { places } )

    } catch (error) {
      console.log(err)
      res.render('error404')
    }
    
})

router.get('/new', (req,res) => {
  res.render('places/new')
})

router.post('/', async(req,res) => {
    try {
      if(!req.body.image){
        delete req.body['image']
    }
      await db.Place.create(req.body)
      res.redirect('/places')

    } catch (error) {
      console.log(err)
      res.render('error404')
    }
})



router.get('/:id', async(req, res) => {
 try {
   const { id } = req.params
   const place = await db.Place.findById(id)
   res.render('places/show', { place })
 } catch (error) {
  console.log(err)
  res.render('error404')
 }
})
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    // removing item from array
    places.splice(id, 1)
    res.redirect('/places')
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = '/images/chia-fruit-drink.jpg'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})




router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})




module.exports = router