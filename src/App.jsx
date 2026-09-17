import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AddProduct from './Pages/AddProduct';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
