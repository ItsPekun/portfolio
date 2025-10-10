import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-sky-900 flex justify-center relative overflow-hidden">
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
