import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Navvbar } from "./components/Navvbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Destination } from "./components/Destination";
import { Blog } from "./components/Blog";
import { Testmoina } from "./components/Testmoina";
import { Contect } from "./components/Contect";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
function App() {
  return (
    <>
      <Navvbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/test" element={<Testmoina />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
