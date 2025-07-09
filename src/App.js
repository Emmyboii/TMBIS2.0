import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home2 from "./Pages/Home2";
import { Routes, Route } from 'react-router-dom';
import Programs from "./Pages/Programs";
import EachPrograms from "./Components/EachPrograms";
import Cart from "./Components/Cart";
import { useState } from "react";

function App() {

  const [openCart, setOpenCart] = useState(false)

  return (
    <div className="App">
      <div onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/:category" element={<Programs setOpenCart={setOpenCart} />} />
          <Route path="/:category/:slug" element={<EachPrograms setOpenCart={setOpenCart} />} />
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
