import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AssetReg from './pages/AssetReg';
import MyAssets from './pages/MyAssets';
import Marketplace from './pages/Marketplace';
import LogOrSign from './pages/LogOrSign';


function App() {

  return (
    <div id='app'>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AssetReg" element={<AssetReg />} />
        <Route path="/MyAssets" element={<MyAssets />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/LogOrSign" element={<LogOrSign />} />

      </Routes>
      <Footer />
    </BrowserRouter>

      </div>
  )
}

export default App
