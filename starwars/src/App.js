import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const randMin = 1;
  const randMax = 30;
  const randomNum = Math.floor(randMin + Math.random() * (randMax - randMin));

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState(`people/${randomNum}/`);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/" + query)
        .then(result => {
          setData(result.data);
          console.log(result.data);
        })
        .catch(err => console.log(err));
    };

    fetchData();
  }, [query]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
