import './App.css';
import Home from './pages/Home';
import ProductScreen from './pages/ProductScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Helmet>
        <title>Hafiz Pizza Hut</title>
      </Helmet>
      <div>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
