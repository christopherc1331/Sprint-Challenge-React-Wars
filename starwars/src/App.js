import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./components/CharacterCard.js";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);
  // const [query, setQuery] = useState(`people/`);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(result => {
          console.log(result.data.results);
          setData(result.data.results);
          console.log(data);
        })
        .catch(err => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {/* {data.map(item => {
          return <CharacterCard name={item.name} />;
        })} */}
      </div>
    </div>
  );
};

export default App;
