import './Home.css';
import Header from '../../Components/Header/Header.jsx';
import Categories from '../../Components/Categories/Categories.jsx';
import Hero from '../../Components/Hero/Hero.jsx';
import { Heading1, Heading2 } from '../../Components/Heading/Heading.jsx';
import CategoryCards from '../../Components/CategoryCards/CategoryCards.jsx';
import Button from '../../Components/Button/Button.jsx';
import ProductSection from '../../Components/ProductCard/ProductCard.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Home = () => {
    return(
        <>
        <Header/>
        <Categories/>
        <Hero/>
        <div className="container">
            <div className="text-margin centered-text">
                <Heading1 text="Популярні Категорії"/>
                <Heading2 text="Оберіть категорію меблів, яка відповідає вашим потребам та стилю"/>
            </div>
        </div>
        <CategoryCards/>
        <div className="text-margin">
            <div className="container-headings-button">
                <div className="container-left">
                <Heading1 text="Популярні Товари"/>
                <Heading2 text="Найкращі пропозиції цього місяця"/>
                </div>
                <div className="container-right">
                <Button text="Переглянути усі" className="darkblue"/>
                </div>
            </div>
        </div>
        <ProductSection/>
        <Footer/>
        </>
    )
}
export default Home;