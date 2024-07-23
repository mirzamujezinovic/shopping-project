import "./CartCard.css";

export default function CartCard({
  image,
  title,
  description,
  stock,
  price,
  discountedPrice,
  onClick,
  quantity,
  decrementProduct,
  incrementProduct
}) {
  const displayedPrice = discountedPrice ? discountedPrice : price;

  return (
    <div className="product-cart">
      <img className="product-image" src={image} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="quantity">
        <button 
          className="quantity-button" 
          onClick={decrementProduct} 
          disabled={quantity <= 1}
        >
          -
        </button>
        <p>Quantity: {quantity}</p>
        <button
          className="quantity-button"
          onClick={incrementProduct}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <div className="product-price">
        <h2>{displayedPrice}</h2>
        {discountedPrice && <p className="discount-info">Discounted from {price}</p>}
        <p>In stock: {stock - quantity}</p>
      </div>
      <button onClick={onClick} className="remove-button">
        Remove from cart
      </button>
    </div>
  );
}