import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart((prevProducts) => {
      const existingProduct = prevProducts.find(item => item.id === product.id);
      if (existingProduct) {
        return prevProducts.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevProducts,
          { ...product, quantity: 1 }, // Initial quantity set to 1
        ];
      }
    });
  };

  const removeFromCart = (product) => {
    const newProducts = productsInCart.filter((item) => item.id !== product.id);
    setProductsInCart(newProducts);
  };

  const decreaseQuantity = (productId) => {
    setProductsInCart(productsInCart.map(item =>
      item.id === productId
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : null
        : item
    ).filter(item => item !== null));
  };

  const increaseQuantity = (productId) => {
    setProductsInCart(productsInCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const values = {
    productsInCart,
    setProductsInCart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
