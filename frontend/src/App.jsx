import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import { ContactUs } from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Login from './pages/Login';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<UserProfile />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
