import { useGetAllProducts } from "../hooks/useGetAllProducts";

import { Loader, ItemListContainer } from "../components";

export const Home = () => {
  const { loading, products } = useGetAllProducts();

  return loading ? <Loader /> : <ItemListContainer products={products} />;
};
