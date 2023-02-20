import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Description = ({ movies }) => {
    const { id } = useParams();
    var movie = movies.find((e) => e.id == id);
    // var mova = movies.find((e) => e.title == movn);
    console.log(movie)
  
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Link to="/"> Home</Link>
      </div>
    );
  };
  export default Description;