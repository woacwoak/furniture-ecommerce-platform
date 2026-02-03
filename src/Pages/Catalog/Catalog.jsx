import './Catalog.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../../Components/ProductCard/ProductCard.jsx';
import ProductSection from '../../Components/ProductSection/ProductSection.jsx';

const manufacturers = ["Happy Lounge", "Lado", "Stylegroup", "Dyvanoff"];

const Catalog = () => {
    return (
        <div className="page-wrapper">
            <Header />
            
            <main className="products-container">
                <header className="products-header">
                    <h1>Товари</h1>
                    <p className="page-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </header>

                <div className="products-layout">
                    {/* Sidebar Filters */}
                    <aside className="filters-sidebar">
                        <div className="filter-header">
                            <h2 className="filter-title">Фільтри</h2>
                            <button className="clear-filters">Скинути фільтри</button>
                        </div>
                        
                        <div className="filter-group">
                            <h3 className="group-label">Виробник</h3>
                            {manufacturers.map((name) => (
                                <label key={name} className="checkbox-item">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    {name}
                                </label>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <section className="main-content">
                        <div className="grid-controls">
                            <span className="products-found">Знайдено 103 Продуки</span>
                            <div className="sort-wrapper">
                                <label>Сортувати за</label>
                                <select className="sort-select">
                                    <option>Популярні</option>
                                    <option>Ціна: від низької</option>
                                    <option>Ціна: від високої</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <ProductSection/>
                        </div>

                        <button className="load-more">Більше</button>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Catalog;