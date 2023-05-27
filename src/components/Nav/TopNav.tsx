import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const TopNav = () => {
  const { name, age, email, sayHello, cart } = useContext(UserContext);

  console.log({ name, age, email });

  return (
    <div>
      TopNav
      <h4>Total Items: {cart.totalItems}</h4>
      <button onClick={sayHello}>Say hello</button>
      <button onClick={() => cart.setTotalItems(10)}>Change Total</button>
    </div>
  );
};
