import './ProductCard.css';

const ProductCard = ({ image, title, rating, reviews, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-rating">
          <span className="star-icon">★</span>
          <span className="rating-value">{rating}</span>
          <span className="review-count">({reviews})</span>
        </div>

        <div className="product-footer">
          <span className="product-price">{price} грн</span>
          <button className="buy-button">🛒 Купити</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
