import ProductCard from '../../Components/ProductCard/ProductCard.jsx';

import ProductImage1 from '../../assets/productImages/ProductImage1.png';
import ProductImage2 from '../../assets/productImages/ProductImage2.png';
import ProductImage3 from '../../assets/productImages/ProductImage3.png';
import ProductImage4 from '../../assets/productImages/ProductImage4.png';

const products = [
  { id: 1, title: "Ліжко Комфорт синє", rating: 4.8, reviews: 120, price: "19 999", image: ProductImage1 },
  { id: 2, title: "Диван Барон", rating: 4.5, reviews: 84, price: "16 999", image: ProductImage2 },
  { id: 3, title: "Диван Вікторія", rating: 4.7, reviews: 19, price: "15 999", image: ProductImage3 },
  { id: 4, title: "Диван Боно", rating: 4.9, reviews: 64, price: "18 999", image: ProductImage4 }
];

const ProductSection = () => {
  return (
    <div className="container product-section">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
