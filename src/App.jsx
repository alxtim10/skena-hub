import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Men from "./routes/men/Men";
import Header from "./components/header/Header";
import Women from "./routes/women/Women";
import Sale from "./routes/sale/Sale";
import Cart from "./routes/cart/Cart";
// import { useEffect, useState } from "react";

function App() {
  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/api")
  //     .then(response => response.json())
  //     .then(data => {
  //       setBackendData(data);
  //     });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
