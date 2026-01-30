import './Categories.css';
import ChairImage from '../../assets/chair.png';

const Categories = () => {
    const categories = [
        "Sofas",
        "Beds",
        "Dining",
        "Outdoor",
        "Storage",
        "Lighting",
        "Decor",
        "Rugs"
    ];

    return (
        <div className="container">
            <div className="categories">
                {categories.map((category) => (
                    <div className="card" key={category}>
                        <img src={ChairImage} alt={category} />
                        <span>{category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
