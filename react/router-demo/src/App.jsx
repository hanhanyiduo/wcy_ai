import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'
import Products from './pages/Products'
import ProductDetails from './pages/Products/ProductDetails'
import NewProduct from './pages/Products/NewProduct'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<UserProfile />} />
        <Route path='/products' element={<Products />}>
          <Route path=':productId' element={<ProductDetails/>}/>
          <Route path='new' element={<NewProduct />}/>
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;