import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/ui/nav";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import Footer from "./components/ui/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="font-Montserrat w-[100%] flex flex-col overflow-auto scroll-smooth bg-[#460073] text-white">
        <Nav />
        <Routes className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
