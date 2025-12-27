
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Success from "./component/success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <>
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Education />
    //   <Contact />
    // </>
    // <Routes>
    // <Route path="/" element={<Home />} />
    // <Route path="/success" element={<Success />} />

    // </Routes>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </>
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
