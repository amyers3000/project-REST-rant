const React = require('react')

function Def (html) {
    return(
    <html>
        <head>
            <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>   
            <link rel='stylesheet' href='/css/style.css'/>
            <title>REST-Rant</title>
        </head>
        <body>
            <div className='wrapper'>
            <nav className='navbar navbar-expand-lg bg-dark'>
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 text-light">REST-Rant</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className='nav-link active text-light'href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link active text-light' href='/places'>Places</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link active text-light' href='/places/new'>Add Place</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
            {html.children}
            <div className='push'></div>
            </div>
        </body>
    </html>
    )
}

module.exports = Def