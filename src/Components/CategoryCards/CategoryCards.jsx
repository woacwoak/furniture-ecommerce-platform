import './CategoryCards.css';
import softFurnitureImg from '../../assets/categoryImages/softFurniture.png';
import sofasImg from '../../assets/categoryImages/sofaImg.png';
import armchairsImg from '../../assets/categoryImages/armchairsImg.png';
import bedroomSetsImg from '../../assets/categoryImages/bedroomSetsImg.png';

const categories = [
  { id: 1, title: "М'які меблі", count: "75 видів", image: softFurnitureImg },
  { id: 2, title: "Дивани", count: "46 видів", image: sofasImg },
  { id: 3, title: "Крісла", count: "36 видів", image: armchairsImg },
  { id: 4, title: "Спальні Гарнітури", count: "25 видів", image: bedroomSetsImg },
];

const CategoryCards = () => {
  return (
    <div className="category-cards-container">
      <div className="category-cards">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.title} className="card-image" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3 className="card-title">{category.title}</h3>
              <p className="card-count">{category.count}</p>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;