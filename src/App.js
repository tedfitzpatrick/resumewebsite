// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './screens/Home/Home';
import About from './screens/About/About';
import Career from './screens/Career/Career';
import Education from './screens/Education/Education';
import Portfolio from './screens/Portfolio/Portfolio';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/career" component={Career} />
    <Route path="/education" component={Education} />
    <Route path="/portfolio" component={Portfolio} />
    </Routes>
    </Router>
  );
}

export default App;
