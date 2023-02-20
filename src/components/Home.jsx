import React from "react";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import MovieList from "./MovieList";
import { useState } from "react";
import Description from "./Description";


function Home(
    {
      title, setTitle, rating, setRating, addMovie, moviesData
    }
  ) {
  
    return (
      <div className="col-md-6 offset-md-3">
          <Filter
            title={title}
            setTitle={setTitle}
            rating={rating}
            setRating={setRating}
          />
          <AddMovie addMovie={addMovie}/>
          <MovieList moviesData={moviesData} title={title} rating={rating} />
        </div>
    );
  }
  export default Home;