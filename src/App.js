import { useState } from 'react';
import './App.css';

//we can use lists to render out arrays and arrays of objects
//this allows us to work with large data sets and can implement some cool features

function CourseList(){
  const courseTitles = ["SDEV 120", "SDEV 200", "SDEV 255"]


  //use react to render out a list using the .map method
  //we do this by calling the courseTitles and give it a parameter name that represents each item in the list
  return(
    <ul>
      {courseTitles.map(course => <li>{course}</li>)}
    </ul>
  )
}


function App() {
  return (

    <CourseList />
    

  );
}

export default App;
