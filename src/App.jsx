import './App.scss';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Background from './components/Background/Background.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Connect from './components/Connect/Connect.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ThemeProvider } from './components/ThemeContext/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="background">
        <Background />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="connect">
        <Connect />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
