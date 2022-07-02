// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Nav from './Nav';

import Home from './screens/Home/Home';
import About from './screens/About/About';
import Career from './screens/Career/Career';
import Education from './screens/Education/Education';
import Portfolio from './screens/Portfolio/Portfolio';

import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <div>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/education" element={<Education />} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
