const React = require('react')
const Def = require('./default')

function home (){
    return(
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div>
                <img className='rounded mx-auto d-block' width={700} id = 'main' src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake'/>
                <div className='text-center'>
                    Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com/photos/MsTOg6rhRVk'>Unsplash</a>
                </div>
            </div>
            <a className='d-grid gap-2 col-6 mx-auto' href='/places'>
                <button className='btn-primary btn-lg'>Places Page</button>
            </a>
        </main>
    </Def>
    )
}


module.exports = home