import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinInfo from "./Pages/CoinInfo";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";
import Market from "./Pages/MarketPage"; //check lai
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinInfo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
