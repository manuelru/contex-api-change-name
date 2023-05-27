import { useState } from "react";
import { postProduct } from "../../api/products.api";

export const ProductForm = ({
  setShowForm,
  fetchProducts,
}: {
  setShowForm: (value: boolean) => void;
  fetchProducts: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: 0,
    price: 0,
    tags: [""],
  });
  const [tags, setTags] = useState<string[]>([]);

  const onChange = (e:any) => {
    const newState = {
      [e.target.name]: e.target.value,
    };

    setForm({ ...form, ...newState });
  };

  const onChangeSelect = (e: any) => {
    const selectedTags: string[] = [];
    Array.from(e.target.selectedOptions).map((item: any) =>
      selectedTags.push(item.value)
    );

    setTags(selectedTags);
    setForm({ ...form, tags: selectedTags });
  };

  const onSubmit = (e:any) => {
    setIsLoading(true);
    e.preventDefault();

    postProduct({ ...form, rating: Number(form.rating) }).then((resp) => {
      setIsLoading(false);
      setShowForm(false);
      fetchProducts();
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            value={form.name}
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Descripción
          </label>
          <input
            value={form.description}
            onChange={onChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Valoraciones
          </label>
          <input
            value={form.rating}
            onChange={onChange}
            type="number"
            className="form-control"
            id="rating"
            name="rating"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Precio
          </label>
          <input
            value={form.price}
            onChange={onChange}
            type="number"
            className="form-control"
            id="price"
            name="price"
          />
        </div>

        <select name="tags" id="tags" multiple onChange={onChangeSelect}>
          <option value="smart">Smart</option>
          <option value="phones">phones</option>
          <option value="promo">promo</option>
          <option value="summer">Summer</option>
          <option value="tech">tech</option>
        </select>

        <input
          type="submit"
          value={isLoading ? "Guardando..." : "Guardar"}
          disabled={isLoading}
        />

        <button onClick={() => setShowForm(false)}>Cancelar</button>
      </form>
    </div>
  );
};
