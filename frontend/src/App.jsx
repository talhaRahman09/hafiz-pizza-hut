import './App.css';
import Home from './pages/Home';
import ProductScreen from './pages/ProductScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

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
