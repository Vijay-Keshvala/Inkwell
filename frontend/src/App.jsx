import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Home from './pages/Home'
import { NavBar } from './components/NavBar'
import ProductDetails from './components/ProductDetails'
import { ContactUs } from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path='/product-details' element={<ProductDetails/>}/>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default App
