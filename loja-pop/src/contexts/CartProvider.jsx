import { useState } from "react";
import { CartContext } from "./CartContext";


export function CartProvider({ children }) {
const [cart, setCart] = useState([]);


function addToCart(item) {
setCart((prev) => [...prev, item]);
}


return (
<CartContext.Provider value={{ cart, addToCart }}>
{children}
</CartContext.Provider>
);
}
