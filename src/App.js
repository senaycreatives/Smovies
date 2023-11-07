import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";
import Genre from "./pages/Genre";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className=" min-h-screen min-w-full  bg-contain overflow-hidden">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Movie" element={<Movie />} />
<<<<<<< HEAD
        <Route path="tvseries" element={<TvSeries />} />
=======
        <Route path="TvSeries" element={<TvSeries />} />
>>>>>>> 9994b6dddeceececcdc442abacbd16d8298788ba
        <Route path="Genre" element={<Genre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
