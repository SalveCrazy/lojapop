import { useState, createContext, useContext } from "react";

const CartContext = createContext();


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
const useCart = () => {
  const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { CartContext, useCart };