import { useNavigate } from "react-router-dom";


export default function Confirmacao() {
const navigate = useNavigate();


return (
<div className="p-4 text-center">
<h1 className="text-2xl font-bold">Você já tem login?</h1>


<button
className="bg-black text-white px-4 py-2 mt-4 w-full"
onClick={() => navigate("/login")}
>
Sim, fazer login
</button>


<button
className="bg-gray-700 text-white px-4 py-2 mt-4 w-full"
onClick={() => navigate("/criar-conta")}
>
Não, criar conta
</button>
</div>
);
}