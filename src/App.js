import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <h1>Changes to check CI/CD working</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row title="Top Rated" fetchUrl={requests.fetcTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAtionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
