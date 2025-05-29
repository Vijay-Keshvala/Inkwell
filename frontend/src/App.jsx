import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import { ContactUs } from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Login from './pages/Login';
import Footer from './components/Footer';
import UserProfile from './pages/user/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Wrapper component to access location
function AppWrapper() {
  const location = useLocation();
  // Condition to check if current route is '/user-profile'
  const hideNavFooter = location.pathname === '/user-profile';

  return (
    <>
      {!hideNavFooter && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user-profile' element={<UserProfile />} />
      </Routes>
      {!hideNavFooter && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
