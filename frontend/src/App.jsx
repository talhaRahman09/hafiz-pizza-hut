import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/user/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './components/Routes/PrivateRoute';


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          {/* <Route path='/dashboard'> */}
          <Route path='' element={<Dashboard />} />
        </Route>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
