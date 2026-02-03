import './Home.css';
import Header from '../../Components/Header/Header.jsx';
import Categories from '../../Components/Categories/Categories.jsx';
import Hero from '../../Components/Hero/Hero.jsx';
import Heading from '../../Components/Heading/Heading.jsx';
import CategoryCards from '../../Components/CategoryCards/CategoryCards.jsx';
import Button from '../../Components/Button/Button.jsx';
import ProductSection from '../../Components/ProductSection/ProductSection.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Home = () => {
    return(
        <>
        <Header/>
        <Categories/>
        <Hero/>
        <div className="container">
            <div className="text-margin centered-text">
                <Heading level={1}>Популярні Категорії</Heading>
                <Heading level={3}>Оберіть категорію меблів, яка відповідає вашим потребам та стилю</Heading>
            </div>
        </div>
        <CategoryCards/>
        <div className="text-margin">
            <div className="container-headings-button">
                <div className="container-left">
                <Heading level={1}>Популярні Товари</Heading>
                <Heading level={3}>Найкращі пропозиції цього місяця</Heading>
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