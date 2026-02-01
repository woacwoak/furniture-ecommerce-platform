import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Categories from './Components/Categories/Categories.jsx';
import Carousel from './/Components/Carousel/Carousel.jsx';
import Hero from './Components/Hero/Hero.jsx';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Categories/>
      <Hero/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;