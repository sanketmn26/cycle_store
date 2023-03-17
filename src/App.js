import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Checkout from './Pages/Checkout';
import NoPage from './Pages/NoPage';
import Footer from './Components/Footer';
import { CartProvider } from "react-use-cart";
import { createContext, useState } from 'react';


const login_context = createContext();

function App() {

  if(!localStorage.getItem("loggedin"))
  localStorage.setItem("loggedin", 0);


  const [loggedin, setLogin] = useState(localStorage.getItem("loggedin"));

  const login_update = (state) => {

    setLogin(state);

  }



  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <login_context.Provider value={{ loggedin, login_update }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
          </login_context.Provider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { login_context };

