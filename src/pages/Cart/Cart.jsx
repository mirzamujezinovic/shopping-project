import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Cart.css";

export default function Cart() {
  const { productsInCart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(AppContext);

  return (
    <div className="cart-container">
      {productsInCart.length === 0 ? (
        <div className="cart-empty">
          <img src="https://www.adasglobal.com/img/empty-cart.png" alt="prazna" />
        </div>
      ) : (
        productsInCart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image_url} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.title}</h3>
              {item.discountedPrice ? (
                <div className="cart-item-prices">
                  <p className="cart-item-discount">{item.original_price} RSD</p>
                  <p className="cart-item-price">{item.current_price} RSD</p>
                </div>
              ) : (
                <p className="cart-item-price">{item.current_price} RSD</p>
              )}
              <div className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item)} className="cart-item-remove">Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
