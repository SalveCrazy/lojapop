import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
const { cart } = useContext(CartContext);
const { user } = useContext(AuthContext);
const navigate = useNavigate();


const total = cart.reduce((t, item) => t + item.price, 0);


return (
<div className="p-4">
<h1 className="text-xl font-bold">Seu Carrinho</h1>


{cart.map((item) => (
<div key={item.id} className="border p-2 rounded mt-3">
{item.title} — R$ {item.price}
</div>
))}


<h2 className="font-semibold mt-4">Total: R$ {total}</h2>


<button
className="bg-blue-600 text-white px-4 py-2 mt-4"
onClick={() => {
if (!user) return navigate("/confirmacao");
navigate("/finalizar");
}}
>
Continuar
</button>
</div>
);
}   