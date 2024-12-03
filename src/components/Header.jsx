import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Switcher from './Switcher'
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";



function Header() {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      // Sticky navbar
      setIsSticky(window.scrollY > 100);

      // Activar enlaces según la sección visible
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuActive(false);
  }; 

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="#home" className="logo">
        <span>SRG. </span>Developer
      </a>
      <div id="menu-icon" onClick={() => setMenuActive(!menuActive)}>
        {/* <i className={`bx ${menuActive ? "bx-x" : "bx-menu"} cursor-pointer`} id="menu-icon"></i> */}
        {menuActive? <IoMdClose size={'20px'}/> : <LuMenu size={'20px'}/>}
      </div>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home" className="active" onClick={handleLinkClick}>
          {t('home')}
        </a>
        <a href="#services" onClick={handleLinkClick}>
          {t('skill')}
        </a>
        <a href="#portfolio" onClick={handleLinkClick}>
          {t('portfolio')}
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          {t('contact')}
        </a>
      </nav>
      <Switcher/>
    </header>
  );
}

export default Header;
