import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import PrivateRoute from './auth/PrivateRoute';

  import About from './screens/About/About';
  import Career from './screens/Career/Career';
  import Education from './screens/Education/Education';
  import Home from './screens/Home/Home';
  import NotFound from './screens/NotFound/NotFound';
  import Portfolio from './screens/Portfolio/Portfolio';
  import SignIn from './screens/SignIn/SignIn';
  
const AppRoutes = () => {

return (
    
      <main>
      <Routes>
      <Route path="*" element={<NotFound />} />  
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
      <Route path="/career" element={<PrivateRoute><Career /></PrivateRoute>} />
      <Route path="/education" element={<PrivateRoute><Education /></PrivateRoute>} />
      <Route path="/portfolio" element={<PrivateRoute><Portfolio /></PrivateRoute>} />
      </Routes>
      </main>
    
)};

export default AppRoutes;