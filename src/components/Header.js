import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

const Header = () => {
  const dropdownRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown(index);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">SIVANTE</div>
      </header>
      <nav className="navbar">
        <ul className="dropdown-menu" ref={dropdownRef}>
          <li
            className={`dropdown ${activeDropdown === 0 ? "active" : ""}`}
            onClick={() => handleDropdownClick(0)}
          >
            ICONS
            <ul className="dropdown-content">
              <li>WOMEN'S ICONS</li>
              <li>MEN'S ICONS</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}
            onClick={() => handleDropdownClick(1)}
          >
            MEN
            <ul className="dropdown-content">
              <li>
            CLOTHING
                 <ul className="sub-menu">
                    <li>Coats and Jackets</li>
                    <li>Formal Jackets</li>
                    <li>Leather</li>
                    <li>Knitwear</li>
                    <li>Sweatshirts</li>
                    <li>T-Shirts</li>
                    <li>Shirts</li>
                    <li>Denim</li>
                    <li>Pants</li>
                    <li>Shorts</li>
                    <li>Swimwear</li>
                    <li>Underwear & Socks</li>
                  </ul>
              </li>
              <li>ACTIVEWEAR</li>
              <li>SHOES</li>
              <li>BAGS</li>
              <li>ACCESSORIES</li>
              <li>JEWELRY</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}
            onClick={() => handleDropdownClick(2)}
          >
            WOMEN
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 3 ? "active" : ""}`}
            onClick={() => handleDropdownClick(3)}
          >
            KIDS
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 4 ? "active" : ""}`}
            onClick={() => handleDropdownClick(4)}
          >
            EYEWEAR
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 5 ? "active" : ""}`}
            onClick={() => handleDropdownClick(5)}
          >
            HOMEWEAR
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 6 ? "active" : ""}`}
            onClick={() => handleDropdownClick(6)}
          >
            GIFTS
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 7 ? "active" : ""}`}
            onClick={() => handleDropdownClick(7)}
          >
            SPECIAL ITEMS
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 8 ? "active" : ""}`}
            onClick={() => handleDropdownClick(8)}
          >
            BRAND
            <ul className="dropdown-content">
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;