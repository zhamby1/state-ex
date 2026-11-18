import { useState } from 'react';
import './App.css';

//we can use several different techniques to render out a conditional component
//we can see if a value is true on a prop, and if it is we can render a jsx element, and if not render a different element

function Light(props){
  if(props.on){
    return <p>Light is on</p>
  }
  else{
    return <p>Light is off</p>
  }
}

//use if, elseif and else to see changes are saved
function StatusBanner(props){
  let banner

  if (props.status === "success"){
    banner = <div>Changes Saved</div>
  }
  else if (props.status === "error"){
    banner = <div>Something went wrong</div>
  }

  else{
    banner = <div>Draft Mode</div>
  }

  return(
    <section>{banner}</section>
  )
}

//ternary operator
function AuthButton(props){
  //this button will say Log in if the user is not logged in, and will say logout if the user is not logged out

  return(
    <button>
      {props.isLoggedIn ? "Logout" : "Login"}
    </button>
  )
}


function App() {
  return (
    <>
    <Light on={true} />
    <StatusBanner status="success" />

    <AuthButton isLoggedIn={true} />


    </>
    

  );
}

export default App;
