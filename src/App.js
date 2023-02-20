import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import "./App.css";
import { moviesData } from "./components/data";
import Description from "./components/Description";
import Home from "./components/Home";
import {Route,Routes, Navigate} from "react-router-dom";


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
        <Routes>
          <Route path="/" element={<Navigate to="/movie" />} />
          <Route path="/movie" element={<Home title={title} setTitle={setTitle} rating={rating} setRating={setRating} addMovie={addMovie} moviesData={moviesData} />} />
          <Route path="/movie/:id" element={<Description movies={moviesData} />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;

