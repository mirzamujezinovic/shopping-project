import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/CartCard/CartCard";
import "./Cart.css";
import { Link } from "react-router-dom";
import ModalCart from "../../components/Modal-cart/ModalCart"; 

export default function Cart() {
  const { productsInCart, removeFromCart, decrementProduct, incrementProduct } = useContext(AppContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [productToRemove, setProductToRemove] = useState(null); 

  useEffect(() => {
    const newTotal = productsInCart.reduce((acc, curr) => {
      let newPrice;
      if (curr.discountedPrice) {
        newPrice = parseFloat(curr.discountedPrice.replace(",", "."));
      } else {
        newPrice = parseFloat(curr.current_price.replace(",", "."));
      }
      return acc + newPrice * curr.quantity;
    }, 0).toFixed(3);
    setTotalAmount(newTotal);
  }, [productsInCart]);

  const handleRemoveClick = (product) => {
    setProductToRemove(product);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (productToRemove) {
      removeFromCart(productToRemove);
    }
    setIsModalOpen(false);
    setProductToRemove(null);
  };

  const handleCancelRemove = () => {
    setIsModalOpen(false);
    setProductToRemove(null);
  };

  return (
    <div className="wrapper-page">
      {productsInCart.length < 1 ? (
        <div className="error">
          <img className="error-img" src={"https://www.adasglobal.com/img/empty-cart.png"} />
          <h2>No items in cart</h2>
          <p>
            Start browsing <Link to="/products">products</Link>
          </p>
        </div>
      ) : (
        <div className="wrapper-cart">
          <h1>My Cart</h1>
          {productsInCart.map((product) => {
            return (
              <CartCard
                key={product.id}
                image={product.image_url}
                title={product.title}
                stock={product.stock}
                price={product.current_price}  
                discountedPrice={product.discountedPrice}  
                description={product.short_description}
                onClick={() => handleRemoveClick(product)} // Trigger modal on remove click
                quantity={product.quantity}
                decrementProduct={() => decrementProduct(product)}
                incrementProduct={() => incrementProduct(product)}
              />
            );
          })}
          <h1>Total amount: {totalAmount}</h1>
        </div>
      )}
      {isModalOpen && (
        <ModalCart
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
    </div>
  );
}
