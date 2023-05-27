import { AuthContextProvider } from "./context/AuthContext";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <AuthContextProvider>
      <ProductsPage />
    </AuthContextProvider>
  );
}

export default App;
