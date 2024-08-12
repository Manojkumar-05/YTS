import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/ui/nav";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import Careers from "./components/pages/Careers";
import Join from "./components/pages/Join";
import BackToTopButton from "./components/ui/ui-comp/backToTop";
import Footer from "./components/ui/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="font-Montserrat flex flex-col overflow-auto scroll-smooth bg-[#460073] text-white">
        <Nav />
        <Routes className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        {/* <Contact /> */}
        <Footer />
        <BackToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
