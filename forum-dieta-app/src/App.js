import React, { useCallback, useEffect, useState } from "react";
import "./style.css";

import staticObj from "./data.json";
import Home from "./Pages/Home/Home";

function App() {
  const [obj, setObj] = useState([]);

  const fetchApi = useCallback(() => {
    const baseURL = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(baseURL)
      .then((r) => r.json())
      .then((json) => setObj(json));
  }, []);

  useEffect(fetchApi, [fetchApi]);

  obj.length === 0 && setObj(staticObj);

  return (
    <Home obj={obj} staticObj={staticObj} />
  );
}

export default App;
