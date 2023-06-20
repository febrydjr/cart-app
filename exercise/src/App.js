import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
// import Tes from "./pages/tes";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";

function App() {
  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
