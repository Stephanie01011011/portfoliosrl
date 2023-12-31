import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/portfoliosrl" element={<Home />}/>
          <Route path="/portfoliosrl/projects" element={<Projects />}/>
          <Route path="/portfoliosrl/about" element={<About />}/>
          <Route path="/portfoliosrl/contact" element={<Contact />}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
