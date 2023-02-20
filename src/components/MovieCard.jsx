import React from "react";
import Rate from "./Rate";

import {Link} from "react-router-dom"; 

const MovieCard = ({ movie }) => {
  const { posterURL, title, description, rating, id } = movie;
  return (
    <div className="card mb-3">
      <img src={posterURL} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Rate rating={rating} />
        <p className="card-text">{description}</p>
        <Link to={`/movie/${id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
