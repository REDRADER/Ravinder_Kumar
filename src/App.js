import React from "react";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import MailId from "./components/MailId";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Socials/>
     <MailId/>
     <div className="content">
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
