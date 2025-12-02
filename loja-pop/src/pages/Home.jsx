import { useEffect, useState } from "react";
import { api } from "../api/api.js";
import ProductCard from "../componentes/ProductCard.jsx";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProdutos(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {produtos.map((produto) => (
        <ProductCard key={produto.id} product={produto} />
      ))}
    </div>
  );
}
