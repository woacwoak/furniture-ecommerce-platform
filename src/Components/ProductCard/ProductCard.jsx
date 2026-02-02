import './ProductCard.css';
import ProductImage1 from '../../assets/productImages/ProductImage1.png';
import ProductImage2 from '../../assets/productImages/ProductImage2.png';
import ProductImage3 from '../../assets/productImages/ProductImage3.png';
import ProductImage4 from '../../assets/productImages/ProductImage4.png';

const products = [
  { id: 1, title: "Ліжко Комфорт синє", rating: 4.8, reviews: 120, price: "19 999", image: ProductImage1 },
  { id: 2, title: "Диван Барон", rating: 4.5, reviews: 84, price: "16 999", image: ProductImage2} ,
  { id: 3, title: "Диван Вікторія", rating: 4.7, reviews: 19, price: "15 999", image: ProductImage3 },
  { id: 4, title: "Диван Боно", rating: 4.9, reviews: 64, price: "18 999", image: ProductImage4 }
];

const ProductItem = ({ image, title, rating, reviews, price }) => (
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

const ProductSection = () => {
  return (
    <div className="container product-section">
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;