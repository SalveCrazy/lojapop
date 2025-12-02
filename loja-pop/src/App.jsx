import { CartProvider } from "./contexts/CartProvider.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
