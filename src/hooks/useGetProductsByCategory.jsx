import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const useGetProductsByCategory = (id) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionConfig = collection(db, "products");
    const queryConfig = where("category", "==", id);

    const customQuery = query(collectionConfig, queryConfig);

    getDocs(customQuery)
      .then((snapshot) =>
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { products, loading };
};