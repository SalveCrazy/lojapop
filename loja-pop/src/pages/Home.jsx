import { useEffect, useState } from "react";
import { api } from "../api/api";
import ProductCard from "../components/ProductCard";


export default function Home() {
const [produtos, setProdutos] = useState([]);


useEffect(() => {
api.get("/products").then((res) => setProdutos(res.data));
}, []);


return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
{produtos.map((p) => (
<ProductCard key={p.id} produto={p} />
))}
</div>
);
}