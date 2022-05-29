const React = require('react')
const Def = require('../default')

function show ({ place }) {
    return (
        <Def>
            <main>
                <div className="card mx-auto " style={{width: 600}}>
                    <img src={place.pic} className="card-img-top" alt={place.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{place.name}</h5>
                        <p className="card-text">Rating: None</p>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {place.city}, {place.state}</li>
                    <li className="list-group-item">Cuisines: {place.cuisines}</li>
                    <li className="list-group-item">Comments: No comments yet!</li>
                </ul>
                <span className="card-body">
                    <a href={`/places/${place._id}/edit`} className="btn btn-dark">
                        Edit
                    </a>
                </span>
                <span className='card-body'>
                    <form method="POST" action={`/places/${place._id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form> 
                </span>
            </div>
            </main>
        </Def>
    )
}

module.exports = show 

