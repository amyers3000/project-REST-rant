const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-xl-6'>
          <h2 className='text-center'>
            <a className='link-dark' href={`/places/${place._id}`}> 
              {place.name}
            </a>
          </h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img className='rounded mx-auto d-block' width={500} src={place.pic} alt={place.name}></img>
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant and Rave About</h1>
                <div className='row justify-content-md-center show-box'>
                {placesFormatted}
                </div>
          </main>
      </Def>
  )
  }
  

module.exports = index