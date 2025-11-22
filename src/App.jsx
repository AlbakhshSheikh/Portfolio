import '@fontsource/outfit';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Certifications />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
