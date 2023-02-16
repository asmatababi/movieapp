import React from "react";
import Rate from "./Rate";

const MovieCard = ({ movie }) => {
  const { posterURL, title, description, rating } = movie;
  return (
    <div className="card mb-3">
      <img src={posterURL} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Rate rating={rating} />
        <p className="card-text">{description}</p>
        <a href="#!" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
