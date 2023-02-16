import { useState } from "react";
const AddMovie = ({addMovie}) => {
const[movie,setMovie]= useState(
{title:"",
date:"",
genre:"",
rating:"",
description:"",
posterURL:"",
trailer:"",


});
const onChange=(e)=>setMovie({...movie,[e.target.name]:e.target.value});
const onSubmit=(e)=>{e.preventDefault();
const newMovie={...movie,rating:+movie.rating,id:Date.now()}
addMovie(newMovie)
setMovie({title:"",
date:"",
genre:"",
rating:"",
description:"",
posterURL:"",
trailer:"",

})
}

  return (
    <div className="mb-5">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addMovie"
      >
        Add new movie
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addMovie"
        tabIndex="-1"
        aria-labelledby="addMovieLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addMovieLabel">
                Add New Movie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input value={movie.title} 
                  onChange={onChange}
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input value={movie.date}
                  onChange={onChange}
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <input value={movie.genre}
                  onChange={onChange}
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating
                  </label>
                  <input value={movie.rating}
                  onChange={onChange}
                    type="number"
                    max={5}
                    min={0}
                    className="form-control"
                    id="rating"
                    name="rating"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="posterURL" className="form-label">
                    Poster
                  </label>
                  <input value={movie.posterURL}
                  onChange={onChange}
                    type="url"
                    className="form-control"
                    id="posterURL"
                    name="posterURL"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="trailer" className="form-label">
                    Trailer
                  </label>
                  <input value={movie.trailer}
                  onChange={onChange}
                    type="url"
                    className="form-control"
                    id="trailer"
                    name="trailer"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea value={movie.description}
                  onChange={onChange}
                    className="form-control"
                    id="description"
                    name="description"
                    required
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;

