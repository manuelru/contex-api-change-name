import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const SecondaryNavigation = () => {
  let { user, setUser, greeting,example } = useContext(AuthContext);

  const changeUser = () => {
    setUser({
      name: "dfgsdfsdfs",
      email: "sdfsdfsdfs",
    });
  };

  

  return (
    <div>
      SecondaryNavigation
      <h4 onClick={changeUser}>
        Usuario: {user.name} - {user.email}
      </h4>
      <button onClick={greeting}>Saludar</button>
      <h4>
        Usuario2: {example.newName}
      </h4>
    </div>
  );
};
