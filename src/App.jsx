// Lecture-57 [Setup react router 7]
import {Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
    </>
  );
}
export default App;