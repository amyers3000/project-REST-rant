const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Ooops, sorry, we can't find this page!</p>
                <img width={900} src = '/images/sad-man.jpg' alt = 'sad-man'/>
                <div>
                    Photo by <a href='https://unsplash.com/@christnerfurt'>Brenda Godinez</a> on <a href='https://unsplash.com/photos/sxQz2VfoFBE'>Unsplash</a>
                </div>
                <div></div>
            </main>
        </Def>
    )
}

module.exports = error404