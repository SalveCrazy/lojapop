// Arquivo: src/componentes/ProductCard.jsx

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!product) return null; // segurança

  const handleAddToCart = (e) => {
    e.stopPropagation(); // impede abrir detalhes ao clicar no botão

    addToCart(product);
    console.log(`${product.title} adicionado ao carrinho!`);
  };

  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-xl transition cursor-pointer flex flex-col items-center bg-white"
      onClick={() => navigate(`/produto/${product.id}`)}
    >
      {/* Imagem */}
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Título */}
      <h2 className="text-lg font-semibold text-center mb-2 line-clamp-2 px-2">
        {product.title}
      </h2>

      {/* Preço */}
      <p className="text-xl font-bold text-gray-900 mb-3">
        R$ {product.price?.toFixed(2)}
      </p>

      {/* Botão */}
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
