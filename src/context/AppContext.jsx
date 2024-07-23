/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart((prevProducts) => [
      ...prevProducts,
      { ...product, quantity: 1 },
    ]);
  };

  const removeFromCart = (product) => {
    const newProducts = productsInCart.filter((item) => item.id !== product.id);
    setProductsInCart(newProducts);
  };

  const decrementProduct = (product) => {
    setProductsInCart((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === product.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const incrementProduct = (product) => {
    setProductsInCart((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === product.id && item.quantity < product.stock) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const values = {
    productsInCart,
    setProductsInCart,
    addToCart,
    removeFromCart,
    decrementProduct,
    incrementProduct,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };