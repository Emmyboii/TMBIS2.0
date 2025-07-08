import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home2 from "./Pages/Home2";
import { Routes, Route } from 'react-router-dom';
import Programs from "./Pages/Programs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/*" element={<Programs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
