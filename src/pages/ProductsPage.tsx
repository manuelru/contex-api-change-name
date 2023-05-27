import { MainNavigation } from "../components/Navigation/MainNavigation";
import { SecondaryNavigation } from "../components/Navigation/SecondaryNavigation";
import { SideBar } from "../components/Navigation/SideBar";
import { ProductList } from "../components/products/ProductList";

export const ProductsPage = () => {
  return (
    <>
      <MainNavigation />
      <hr />
      <hr />
      <SideBar />
      <hr />
      <ProductList />
      <hr />
      <SecondaryNavigation />
    </>
  );
};
