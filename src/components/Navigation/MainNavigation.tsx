import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const MainNavigation = () => {
  const { user, cart, getTotalCart, example } = useContext(AuthContext);

  return (
    <div>
      MainNavigation
      <h4>
        Usuario: {user.name} - {user.email}
      </h4>

      <h2>
        Usuario2: {example.newName} - { example.secondaryName} -- (Number of click) = {example.contador}
      </h2>
      <h5>
        Productos en el Carrito: {cart.totalItems} - ${getTotalCart()}
      </h5>
    </div>
  );
};
