import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";
import Actions from "./components/Actions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Hero />
      <Actions/>
      {/* <Works /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
