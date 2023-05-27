import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const SideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      SideBar
      <h4>
        Usuario: {user.name} - {user.email}
      </h4>
    </div>
  );
};
