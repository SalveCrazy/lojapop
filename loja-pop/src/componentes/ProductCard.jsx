import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/api.js";
import { useCart } from "../contexts/CartProvider.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduto(res.data));
  }, [  id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="p-4">
      <img src={produto.image} className="h-60 mx-auto" />
      <h1 className="text-2xl font-bold">{produto.title}</h1>
      <p>{produto.description}</p>
      <p className="text-xl font-bold">R$ {produto.price}</p>

      <button 
        className="bg-black text-white px-4 py-2 mt-3"
        onClick={() => {
          addToCart(produto);
          navigate("/carrinho");
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}