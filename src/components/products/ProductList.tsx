import { useEffect, useState } from "react";
import { getProducts } from "../../api/products.api";
import { Product } from "./product.interfaces";
import { ProductListItem } from "./ProductListItem";
import { ProductForm } from "./ProductForm";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  // if (products.length === 0) {
  //   return <h2>No hay productos</h2>;
  // }

  return (
    <div>
      {showForm && (
        <ProductForm setShowForm={setShowForm} fetchProducts={fetchProducts} />
      )}

      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Categorías</th>
              <th scope="col">Etiquetas</th>
              <th>
                <button onClick={handleClick}>Agregar</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductListItem key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
