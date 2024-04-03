import React from "react";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="yo">
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
