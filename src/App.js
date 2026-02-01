import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Categories from './Components/Categories/Categories.jsx';
import Carousel from './/Components/Carousel/Carousel.jsx';
import Hero from './Components/Hero/Hero.jsx';
import { Heading1, Heading2 } from './Components/Heading/Heading.jsx';
import CategoryCards from './Components/CategoryCards/CategoryCards.jsx';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Categories/>
      <Hero/>
      <Heading1 text="Популярні Категорії"/>
      <Heading2 text="Оберіть категорію меблів, яка відповідає вашим потребам та стилю"/>
      <CategoryCards/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;