import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sing-in' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
