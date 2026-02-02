import React from 'react';
import './Footer.css';
import Logo from "../../assets/SvitMeblivDarkLogo.png";
import { FaPhoneAlt, FaViber, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <hr className="footer-divider" />
            <div className="container footer-content">
                
                {/* Logo & Contacts */}
                <div className="footer-section brand-contacts">
                    <img src={Logo} alt="Світ Меблів" className="footer-logo"/>
                    <div className="contact-item">
                        <FaPhoneAlt className="icon" />
                        <span>+38 097 764 51 78</span>
                    </div>
                    <div className="contact-item">
                        <FaViber className="icon viber" />
                        <span>+38 066 423 87 43 (VIBER)</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <span>svit.mebliv.kiev@gmail.com</span>
                    </div>
                </div>

                {/* Navigation Column 1 */}
                <div className="footer-section">
                    <ul>
                        <li>Про Магазин</li>
                        <li>Гарантія</li>
                        <li>Оплата та Доставка</li>
                        <li>Збірка</li>
                    </ul>
                </div>

                {/* Navigation Column 2 */}
                <div className="footer-section">
                    <ul>
                        <li>Новини</li>
                        <li>Блог</li>
                        <li>Акції</li>
                        <li>Контакти</li>
                    </ul>
                </div>

                {/* Address & Socials */}
                <div className="footer-section address-socials">
                    <p className="address-title">Магазин в м. Київ:</p>
                    <p className="address-text">Бульвар Миколи Руденка 14У, 1 поверх</p>
                    <div className="social-icons">
                        <FaFacebook className="social-icon fb" />
                        <FaTwitter className="social-icon tw" />
                        <FaInstagram className="social-icon ig" />
                        <FaLinkedin className="social-icon ln" />
                    </div>
                </div>

            </div>
            
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <p>© 2011-2025 Всі права захищені. Магазин меблів "СВІТ МЕБЛІВ".</p>
            </div>
        </footer>
    );
};

export default Footer;