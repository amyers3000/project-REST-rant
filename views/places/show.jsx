const React = require('react')
const Def = require('../default')

function show ({ place }) {
    let comments = (
        <li className="list-group-item inactive" key='none'> No comment yet!</li>
    )
    
    if (place.comments.length) {
        comments = place.comments.map(c => {
            return(
                <div className='border' key = {c.id}>
                    <h3 className='rant review'>{c.rant ? 'Rant!' : 'Rave!'}</h3>
                    <h4 className='review'>{c.content}</h4>
                    <h4 className='review'>
                        <strong>- {c.author}</strong>
                    </h4>
                    <h4 className='review'>Rating: {c.stars}</h4>
                    <form method='POST' action={`/places/${place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type='submit' className='btn btn-danger' value='Delete'/>
                    </form>
                </div>
            )
        })
    }
    let rating = (
        <p className='inactive card-text'>
            Not yet rated!
        </p>
    )

    if (place.comments.length) {
        let sumRatings = place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
          <h3>
            {stars}
          </h3>
        )
      }
      
    return (
        <Def>
            <main className='show-box'>
                <div className="card mx-auto" style={{width: 600}}>
                    <img src={place.pic} className="card-img-top" alt={place.name}/>
                    <div className="card-body">
                        <h1 className="card-title name">{place.name}</h1>
                        {rating}
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {place.city}, {place.state}</li>
                    <li className="list-group-item">Cuisines: {place.cuisines}</li>
                    <li className="list-group-item">{place.showEstablished()}</li>
                    {comments}
                </ul>
                <span className="card-body">
                    <div className='btn-group' role='group' aria-label='modify entry'>
                        <a href={`/places/${place._id}/edit`} className="btn btn-dark">
                            Edit
                        </a>
                        <form method="POST" action={`/places/${place._id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form> 
                    </div>
                </span>
                </div>
                <div className='comment-box'>
                    <h5>Got Your Own Rant or Rave?</h5>
                     <form action={`/places/${place.id}/comment`} method="POST">
                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="content">Content</label>
                                <textarea id="content" name="content" className="form-control"></textarea>
                            </div>
                        </div>
                         <div className="row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="author">Author</label>
                                <input id="author" name="author" className="form-control" />
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="stars">Star Rating</label>
                                <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                            </div>
                            <div className="form-group col-sm-2">
                                <label htmlFor="rant" className='form-check-label'>Rant?</label>
                                <input type="checkbox" id="rant" name="rant" className="form-check-input" />
                            </div>
                        </div>
                            <input type="submit" className="btn btn-dark" value="Add Comment" />
                        </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show 

