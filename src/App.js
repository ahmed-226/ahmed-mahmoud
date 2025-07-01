import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Works />
      <Contact />
    </div>
  );
}

export default App;