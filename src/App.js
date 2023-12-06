import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./NavBar";
import RouteList from "./RouteList";

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDogs() {
      const response = await axios.get("http://localhost:3001/dogs");
      setDogs({
        data: response.data,
        isLoading: false,
      });
      setLoading(false);
    }
    loadDogs();
  }, []);
  if (loading) {
    return <p>Page is loading</p>;
  }
  return (
    <div className="App">
      <h1>Find the dog, good luck!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <RouteList dogs={dogs.data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
