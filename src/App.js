import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

import { moviesData } from "./components/data";

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const addMovie=(newMovie)=>{
    console.log(newMovie)
  moviesData.push(newMovie)
  }

  return (
    <div className="container">
      <div className="row">
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
      </div>
    </div>
  );
}

export default App;

