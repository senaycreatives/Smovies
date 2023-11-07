import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";
import Genre from "./pages/Genre";
import Footer from "./Footer";

function App() {
  return (
    <div className=" min-h-screen min-w-full  bg-contain overflow-hidden">
      <Routes>
        <Route index element={<Home />} />
        <Route path="Movie" element={<Movie />} />
        <Route path="contact" element={<TvSeries />} />
        <Route path="Genre" element={<Genre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
