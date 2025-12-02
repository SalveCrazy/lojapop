import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Confirmacao from "../pages/Confirmacao";
import Login from "../pages/Login";
import Finalizar from "../pages/Finalizar";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/produto/:id" element={<ProductDetails/>} />
      <Route path="/carrinho" element={<Cart/>} />
      <Route path="/confirmacao" element={<Confirmacao/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/finalizar" element={<Finalizar/>} />
    </Routes>
  );
}
