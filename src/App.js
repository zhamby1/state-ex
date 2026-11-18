import { useState } from 'react';
import './App.css';

function Movie(){
  const [title,setTitle] = useState("Avengers")
  const [rating,setRating] = useState("PG-13")
  const [releaseYear, setReleaseYear] = useState(2012)

  function changeMovie(){
    setTitle("Hidden Figures")
    setRating("PG-13")
    setReleaseYear(2016)
  }

  return(
    <>
      <h1>Favorite Movie</h1>
      <p>
        {title}, {rating}, {releaseYear}
      </p>
      <button onClick={changeMovie}>
        Change Movie
      </button>
    </>
  )
}


function App() {
  return (

    <Movie />
    

  );
}

export default App;
