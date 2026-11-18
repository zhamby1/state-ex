import { useState } from 'react';
import './App.css';

function Greeting(props){
  //we are going to create a stateful property/variable that can be changed upon the click of a button
  //this is manipulating state - change a value based on an event to a new value
  //syntax const [variablename, setvariablename] = useState(default value)
  const [greeting, setGreeting] = useState("Hi!")

  return(
    <div>
      <p>{greeting}</p>

      <button onClick={() => setGreeting(`Hello, ${props.name}`)}>
        Say Hello
      </button>

      <button onClick={() => setGreeting(`Hey, ${props.name}`)}>
        Say Hey
      </button>
    </div>
  )
}

function App() {
  return (

    <Greeting name="Zach" />

  );
}

export default App;
