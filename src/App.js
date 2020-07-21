import React, {useEffect, useState} from 'react';
import './App.css';


function App() {

  const APP_ID = "30ea1814"
  const APP_KEY = "63d67ba42bad55130aa3641451da3ceb"
  const querry = ""
  const req = `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`

  var [counter, setCounter] = useState(0)
  
  useEffect(()=> {
    console.log('Effect has run')
  })


  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <input className="searchBar" type="text"/>
        <button 
          className="searchButton" 
          type="submit"
          onClick={() => setCounter(counter++)}>
            Search
        </button>
      </form>
      <h3 onClick={() => setCounter(counter++)}> {counter}</h3>
    </div>
  );
}

export default App;
