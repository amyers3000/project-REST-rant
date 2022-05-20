const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="card container-home" style={{width: 800}}>
                    <img src={data.place.pic} className="card-img-top" alt={data.place.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{data.place.name}</h5>
                        <p className="card-text">Rating: None</p>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {data.place.city}, {data.place.state}</li>
                    <li className="list-group-item">Cuisines: {data.place.cuisines}</li>
                    <li className="list-group-item">Comments: No comments yet!</li>
                </ul>
                <span className="card-body">
                    <a href={`/places/${data.id}/edit`} className="btn btn-dark">
                        Edit
                    </a>
                </span>
                <span className='card-body'>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
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

