import { useState } from 'react';
import './App.css';

function Movie(){

  const [movie, setMovie] = useState({
    title: "Inception",
    rating: "PG-13",
    releaseYear: 2010
  })

  //spreader operator ...takes an objects values and spreads them to equal individual properties
  function changeTitle(){
    //it will take the previous data and you can change what piece/pieces of data you want without overwritting everything
    setMovie(prevState => ({
      ...prevState, title: "Titanic"
    }))
  }



  return(
    <>
      <h1>Favorite Movie</h1>
      <p>
       {movie.title}, {movie.rating}, {movie.releaseYear}
      </p>
      <button onClick={changeTitle}>
        Change Title
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
