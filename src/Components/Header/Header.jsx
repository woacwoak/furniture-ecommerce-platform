import './Header.css';
import {Link, NavLink} from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Logo from '../../assets/SvitMeblivDarkLogo.png'
import CartIcon from '../../assets/shoppingCartIcon.svg'
import UserIcon from '../../assets/userIcon.svg'

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <div className="top-stripe bg-blue">
        <div className="container">
          <p>Зимовий Розпродаж - Знижки до 60%</p>
        </div>
      </div>

      <header className={`header ${hidden ? "header--hidden" : ""}`}>
        <div className="container">
          <div className="headerInner">

            <div className="headerLeft">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
            </div>

            <nav className="headerNav">
              <ul className="navLinks">
                <li><NavLink to="/catalog">Каталог</NavLink>
                <div className="dropdown">
                  <div className="dropdown-content">
                  <div className="row">
                    <div className="column">
                      <h3>Category 1</h3>
                      <a href="/">Link 1</a>
                      <a href="/">Link 2</a>
                      <a href="/">Link 3</a>
                    </div>
                    <div className="column">
                      <h3>Category 2</h3>
                      <a href="/">Link 1</a>
                      <a href="/">Link 2</a>
                      <a href="/">Link 3</a>
                    </div>
                    <div className="column">
                      <h3>Category 3</h3>
                      <a href="/">Link 1</a>
                      <a href="/">Link 2</a>
                      <a href="/">Link 3</a>
                    </div>
                    <div className="column">
                      <h3>Category 3</h3>
                      <a href="/">Link 1</a>
                      <a href="/">Link 2</a>
                      <a href="/">Link 3</a>
                    </div>
                  </div>
                </div>
                </div>
                
                </li>
                <li><NavLink to="/aboutus">Про магазин</NavLink></li>
                <li><NavLink to="/deliveryandpayment">Доставка та оплата</NavLink></li>
                <li><NavLink to="/guarantee">Гарантія</NavLink></li>
                <li><NavLink
                to="#footer"
                onClick={(e) => { 
                  e.preventDefault();
                  const footer = document.getElementById('footer');
                  footer.scrollIntoView({ behavior: 'smooth' });
                }}
                >
                  Контакти</NavLink></li>
              </ul>
            </nav>

            <div className="headerRight">
              <input
                type="text"
                className="searchInput"
                placeholder="Пошук меблів..."
              />

              <Link to="/cart" className="cartIcon">
                <img src={CartIcon} alt="cart" />
                <span className="cartCount">0</span>
              </Link>

              <Link to="/login" className="userOption">
                <img src={UserIcon} alt="user" />
                <span>Увійти</span>
              </Link>
            </div>

          </div>
        </div>
      </header>
      
    </>
  );
};


export default Header;