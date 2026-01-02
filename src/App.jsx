import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
             <Route path="/about" element={<About />} />
               <Route path="/service" element={<Service/>} />
               <Route path="/portfolio" element={<Portfolio/>} />
               <Route path="/contact" element={<Contact/>} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
