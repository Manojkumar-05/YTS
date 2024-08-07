import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/ui/nav";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="font-Montserrat w-[100%] flex flex-col overflow-auto scroll-smooth">
        <Nav />
        <Routes className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
