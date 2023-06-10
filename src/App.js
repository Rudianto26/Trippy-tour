import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Services from './components/routes/Services';
import Contact from './components/routes/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/service" exact element={<Services />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
