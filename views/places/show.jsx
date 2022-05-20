const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div class="card container-home" style={{width: 800}}>
                    <img src={data.place.pic} class="card-img-top" alt={data.place.name}/>
                    <div class="card-body">
                        <h5 class="card-title">{data.place.name}</h5>
                        <p class="card-text">Rating: None</p>
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Location: {data.place.city}, {data.place.state}</li>
                    <li class="list-group-item">Cuisines: {data.place.cuisines}</li>
                    <li class="list-group-item">Comments: No comments yet!</li>
                </ul>
                <span class="card-body">
                    <a href={`/places/${data.id}/edit`} class="btn btn-dark">
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