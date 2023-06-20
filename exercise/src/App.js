import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
// import Tes from "./pages/tes";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
