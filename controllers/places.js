const router = require('express').Router()
const db = require('../models')



router.get('/', async(req,res) => {
    try {
      const places = await db.Place.find()
      res.render('places/index', { places } )

    } catch (error) {
      console.log(error)
      res.render('error404')
    }
    
})

router.get('/new', (req,res) => {
  res.render('places/new')
})

router.post('/', async (req,res) => {
    try {
      if(!req.body.pic){
        delete req.body['pic']
      }
      if(!req.body.city){
        delete req.body['city']
      }
      if(!req.body.state){
        delete req.body['state']
      }

      await db.Place.create(req.body)
      res.redirect('/places')

    } catch (err) {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
    }
    else {
        res.render('error404')
    }
    }
})




router.get('/:id', async (req, res) => {
 try {
   const { id } = req.params
   const place = await db.Place.findById(id).populate('comments')
   console.log(place.comments)
   res.render('places/show', { place })
 } catch (error) {
  console.log(error)
  res.render('error404')
 }
})
router.delete('/:id', async (req, res) => {
  try {
    const{ id } = req.params
    await db.Place.findByIdAndDelete(id)
    res.status(303).redirect('/places')
  } catch (error) {
    console.log(error)
    res.render('error404')
  }

})

router.put('/:id', async (req, res) => {
  try {
    const{ id } = req.params
    await db.Place.findByIdAndUpdate(id, req.body)
    res.redirect(`/places/${id}`)
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
  
})




router.get('/:id/edit', async (req, res) => {
  try {
    const { id } = req.params
    const place = await db.Place.findById(id)
    res.render('places/edit', {
      place
    })
  } catch (error) {
    console.log(error)
    res.render('error404')
  }
})

router.post('/:id/comment', async(req, res) => {
  console.log(req.body)
  const{ id } = req.params
  if (req.body.author === ''){
    req.body.author = undefined
  }
  req.body.rant = req.body.rant ? true : false
  try {
      const place = await db.Place.findById(id)
      const comment = await db.Comment.create(req.body)
      place.comments.push(comment.id)
      place.save()
      res.redirect(`/places/${req.params.id}`)
  } catch (error) {
    res.render('error404')
  }
})

router.delete('/:id/comment/:commentId', async(req, res) => {
  try {
    await db.Comment.findByIdAndDelete(req.params.commentId)
    res.redirect(`/places/${req.params.id}`)
  } catch (error) {
    res.render('error404')
  }
})


module.exports = router