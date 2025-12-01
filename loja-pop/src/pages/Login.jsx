import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";


export default function Login() {
const { login } = useContext(AuthContext);
const navigate = useNavigate();
const [form, setForm] = useState({ username: "", password: "" });


function handleSubmit(e) {
e.preventDefault();


api
.post("/auth/login", form)
.then((res) => {
login(res.data.token);
navigate("/carrinho");
})
.catch(() => alert("Credenciais inválidas"));
}


return (
<form className="p-4" onSubmit={handleSubmit}>
<input
className="border p-2 w-full"
placeholder="Usuário"
onChange={(e) => setForm({ ...form, username: e.target.value })}
/>


<input
type="password"
className="border p-2 w-full mt-3"
placeholder="Senha"
onChange={(e) => setForm({ ...form, password: e.target.value })}
/>


<button className="bg-black text-white px-4 py-2 mt-3" type="submit">
Fazer Login
</button>
</form>
);
}       