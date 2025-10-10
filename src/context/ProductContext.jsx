import React, { createContext, useState, useEffect } from "react";
import fetchAPI from "../utils/fetchAPI";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts && JSON.parse(storedProducts).length > 0) {
      setProducts(JSON.parse(storedProducts));
    } else {
      const loadProducts = async () => {
        try {
          const data = await fetchAPI();
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      loadProducts();
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;