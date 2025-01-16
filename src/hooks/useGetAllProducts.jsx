import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useGetAllProducts = (collectionName) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const collectionItems = collection(db, collectionName);
    getDocs(collectionItems)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, items };
};