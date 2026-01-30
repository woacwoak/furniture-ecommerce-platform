import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/SvitMeblivDarkLogo.png'
import CartIcon from '../../assets/shoppingCartIcon.svg'
import UserIcon from '../../assets/userIcon.svg'

const Header = () => {
  return (
    <>
      <div className="top-stripe bg-blue">
        <div className="container">
          <p>Зимовий Розпродаж - Знижки до 60%</p>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="headerInner">

            <div className="headerLeft">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
            </div>

            <nav className="headerNav">
              <ul className="navLinks">
                <li><NavLink to="/catalog">Каталог</NavLink></li>
                <li><NavLink to="/">Про магазин</NavLink></li>
                <li><NavLink to="/">Доставка та оплата</NavLink></li>
                <li><NavLink to="/">Гарантія</NavLink></li>
                <li><NavLink to="/">Контакти</NavLink></li>
              </ul>
            </nav>

            <div className="headerRight">
              <input
                type="text"
                className="searchInput"
                placeholder="Пошук..."
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