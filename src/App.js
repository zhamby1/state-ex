import { useState } from 'react';
import './App.css';

//we can use lists to render out arrays and arrays of objects
//this allows us to work with large data sets and can implement some cool features
//we can also use filter and use state to help us with this

function TodoList(){
  //use use state so we can update the list and delete things from it as we go
  const [todos, setTodos] =  useState([
    {id: 1, text: "Vaccuum"},
    {id: 2, text: "Wash Dishes"},
    {id: 3, text: "Make Bed"}
  ])

  function removeTodo(idToRemove){
    setTodos(todos.filter((todo) => todo.id !== idToRemove))
  }

  return(
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>

      ))}
    </ul>
  )
}



function App() {
  return (

    <TodoList />
    

  );
}

export default App;
