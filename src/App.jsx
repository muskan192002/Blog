import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Contact from"./pages/Contact";
import Footer from "./components/Footer";
import './store/index';
import './reducers';
import Mywork from "./pages/Mywork";
import StickyLogo from "./components/StickyLogo";




function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <StickyLogo/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
             <Route path="/mywork" element={<Mywork />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
