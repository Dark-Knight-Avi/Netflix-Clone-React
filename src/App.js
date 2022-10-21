import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" isLargerRow fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending }/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated }/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies }/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies }/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies }/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies }/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries }/>
    </div>
  );
}

export default App;
