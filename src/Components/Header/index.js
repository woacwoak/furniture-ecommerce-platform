import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/SvitMeblivDarkLogo.png'
import CartIcon from '../../assets/shoppingCartIcon.svg'
import UserIcon from '../../assets/userIcon.svg'

const Header = () => {
    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Зимовий Розпродаж - Знижки до 60%</p>
                </div>
            </div>
        </div>

        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'}><img src={Logo} alt="Logo"/></Link>
                    </div>

                    <div className="navBar col-sm-5 d-flex justify-content-around align-items-center">
                        <nav>
                            <ul className="mb-0">
                                <li><NavLink to={'/catalog'}>Каталог</NavLink></li>
                                <li><NavLink to={'/'}>Про магазин</NavLink></li>
                                <li><NavLink to={'/'}>Доставка та оплата</NavLink></li>
                                <li><NavLink to={'/'}>Гарантія</NavLink></li>
                                <li><NavLink to={'/'}>Контакти</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="searchBar col-sm-2 d-flex justify-content-center align-items-center">
                        <input type="text" className="searchInput" placeholder="Пошук..."/>
                    </div>
                    <div className="cartIcon col-sm-1 d-flex justify-content-center align-items-center">
                        <Link to={'/cart'}>
                            <i><img src={CartIcon} alt="cart"/></i>
                            <span className="cartCount">0</span>
                        </Link>
                        
                    </div>
                    <div className="userOptions col-sm-2 d-flex justify-content-end align-items-center">
                        <img src={UserIcon} alt="user"/>
                        <Link to={'/login'} className="loginLink">Увійти</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;