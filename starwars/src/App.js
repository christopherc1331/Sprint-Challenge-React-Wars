import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./components/CharacterCard.js";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState(`people/`);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/" + query)
        .then(result => {
          setData(result.data.results);
          console.log(result.data.results);
        })
        .catch(err => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {data[1].name}
        {/* {data.results.map(item => {
          // return <CharacterCard name={name} />;
          console.log(item.name);
        })} */}
        {/* <div>
          {data.map(item => {
            return <p>item</p>;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default App;
