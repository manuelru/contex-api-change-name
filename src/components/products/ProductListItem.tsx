import { useContext } from "react";
import { Category, Tag } from "./product.interfaces";
import { AuthContext } from "../../context/AuthContext";

interface ProductListItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  //   rating: string;
  //   color: string;
  categories: Category[];
  tags: Tag[];
}

export const ProductListItem = ({
  id,
  name,
  description,
  price,
  categories,
  tags,
}: ProductListItemProps) => {
  const { cart, setCart,example, setExample } = useContext(AuthContext);

  const categoriesString = categories
    .map((category) => category.name)
    .join(", ");

  const tagsString = tags.map((tag) => tag.name).join(", ");

  const addToCart = () => {
    const item = {
      id,
      name,
      description,
      price,
      amount: 1,
    };
    const items = [...cart.items, item];

    const totalItems = cart.totalItems + 1;

    setCart({
      ...cart,
      items,
      totalItems,
    });
  };

  const changeName = () => {
    let cont = example.contador + 1;
    if (example.newName == "Juan") {
      setExample(  {newName: "Manuel", secondaryName:"Juan", contador: cont} );
      return;
    }else{
      setExample(  {newName: "Juan", secondaryName:"Manuel",contador: cont} );
      return;

    }
    
  };

  return (
    <div>

  
    <tr className="" key={id}>
      <td scope="row">{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{categoriesString}</td>
      <td>{tagsString}</td>
      <td>
        <button onClick={addToCart}>Agrear al carrito</button>
      </td>
      <td>
        <button  onClick={changeName}>Cambiar Name</button>
      </td>
    </tr>




    <tr>
      <form action="">

        <div className="mb-3">
          <label htmlFor=""></label>
        </div>

      </form>
    </tr>

    </div>
  );
};
