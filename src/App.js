import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home2 from "./Pages/Home2";
import { Routes, Route, Navigate } from 'react-router-dom';
import Programs from "./Pages/Programs";
import EachPrograms from "./Components/EachPrograms";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {

  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openCart])

  return (
    <div className="App overflow-x-hidden">
      {openCart && (
        <div
          onClick={() => {
            if (openCart) {
              setOpenCart(false)
            }
          }}
          className="w-full h-[200%] bg-black/30 absolute z-50"></div>
      )}
      <div onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/:category" element={<Programs setOpenCart={setOpenCart} />} />
          <Route path="/:category/:slug" element={<EachPrograms setOpenCart={setOpenCart} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <div onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
