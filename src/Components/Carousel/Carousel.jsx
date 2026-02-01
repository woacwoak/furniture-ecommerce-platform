import { useRef, useEffect } from "react";
import "./Carousel.css";

import Slide1 from "../../assets/hero1.png";
import Slide2 from "../../assets/hero1.png";
import Slide3 from "../../assets/hero1.png";

const slides = [
  {
    image: Slide1,
    title: "Зимовий розпродаж",
    text: "Знижки до 60% на мʼякі меблі",
  },
  {
    image: Slide2,
    title: "Скандинавський стиль",
    text: "Мінімалізм та комфорт",
  },
  {
    image: Slide3,
    title: "Нові колекції",
    text: "Створи ідеальний дім",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const indexRef = useRef(0);

  const scrollToIndex = (index) => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  const next = () => {
    indexRef.current =
      (indexRef.current + 1) % slides.length;
    scrollToIndex(indexRef.current);
  };

  const prev = () => {
    indexRef.current =
      (indexRef.current - 1 + slides.length) % slides.length;
    scrollToIndex(indexRef.current);
  };

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <button className="nav prev" onClick={prev}>‹</button>

      <div className="carousel" ref={carouselRef}>
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide.image} alt={slide.title} />
            <div className="overlay">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <button className="cta">До каталогу</button>
            </div>
          </div>
        ))}
      </div>

      <button className="nav next" onClick={next}>›</button>
    </section>
  );
};

export default Carousel;
