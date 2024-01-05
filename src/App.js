import {  Route, Routes } from "react-router-dom";
import Homeslid from "./components/Homeslid";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ProductDetailes from "./components/ProductDetailes";
import HomeShop from "./components/HomeShop";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  return (
<>
<Navbar/>
<Routes>
<Route path="/" element={<><Homeslid/><HomeShop/></>}/>
<Route path="/Shop" element={<Shop/>}/>
<Route path="/Shop/:productId" element={<ProductDetailes/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
</Routes>
<Footer/>

</>
  );
}

export default App;
 