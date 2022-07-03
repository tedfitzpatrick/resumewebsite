import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import Home from './screens/Home/Home';
  import About from './screens/About/About';
  import Career from './screens/Career/Career';
  import Education from './screens/Education/Education';
  import Portfolio from './screens/Portfolio/Portfolio';
  import SignIn from './screens/SignIn/SignIn';
  import NotFound from './screens/NotFound/NotFound';

const AppRoutes = () => {

return (
    <Router>
      <main>
      <Routes>
      <Route path="*" element={<NotFound />} />  
      <Route path="/" exact element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/education" element={<Education />} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </main>
    </Router>
)};

export default AppRoutes;