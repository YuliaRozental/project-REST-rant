const React = require('react')
const Def = require('../default')

function show (data) {
  let message = ''
  if (data.message) {
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    )
  }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}
            <div className="row">
            <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
            Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            <div className="col-sm-6">
            <h2>Description</h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>  
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
            <h2>Comments</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST"></form>
            </form>
            </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

