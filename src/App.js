import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";
import Genre from "./pages/Genre";
import MovieDetail from "./pages/MovieDetail";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./pages/Search";

function App() {
  return (
    <div className=" min-h-screen  w-screen  sm:overflow-y-scroll  overflow-y-hidden  select-none  bg-contain  overflow-x-hidden  ">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Movie" element={<Movie />} />
        <Route path="TvSeries" element={<TvSeries />} />
        <Route path="Genre" element={<Genre />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/search/:searchtext" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
