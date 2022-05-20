const React = require('react')
const Def = require('./default')

function home (){
    return(
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div id='img-home'>
                <img className='rounded mx-auto d-block' width={600} id = 'main' src='/images/home.jpg' alt='Chia Fruit Shake'/>
                <div className='text-center'>
                    Photo by <a href='https://unsplash.com/@markuswinkler'>Markus Winkler</a> on <a href='https://unsplash.com/photos/-fRAIQHKcc0'>Unsplash</a>
                </div>
            </div>
            <div className='row container-home'>
                <div className='col-sm-6 box' id='places'>
                    <div className='card'>
                    <div className='card-body'>
                        <img src='/images/review.jpg' class='card-img-top home-pic' alt='reviewer'/>
                        <h5 className='card-title'>Places to Rant About</h5>
                        <p className='card-text'>A list of various restaurants that includes locations and reviews</p>
                        <a href='/places' class='btn  btn-dark'>View List</a>
                    </div>
                    </div>
                </div>
                <div className='col-sm-6 box' id='add'>
                    <div className='card'>
                    <div className='card-body'>
                        <img src='/images/New-Places.jpg' class='card-img-top home-pic' alt='Open sign'/>
                        <h5 className='card-title'>More to Rant?</h5>
                        <p className='card-text'> Add more restaurants to the ever growing list - share your experience!</p>
                        <a href='/places/new' class='btn  btn-dark'>Add Place</a>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    </Def>
    )
}


module.exports = home