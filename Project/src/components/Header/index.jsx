import styles from "./styles.module.css";
import logo from "../../images/logo.svg";
import shoppingBag from "../../images/shoppingbag.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const totalProducts = useSelector((state) => state.basket.products);

  const [burger, setBurger] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
        <NavLink to="/categories">
          <button>Catalog</button>
        </NavLink>
      </div>

      <nav className={styles.navBar}>
        <ul className={!burger ? styles.list : styles.listActive}>
          <li>
            <NavLink to="/mainPage" onClick={() => setBurger(false)}>
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setBurger(false)}>
              All products
            </NavLink>
          </li>
          <li>
            <NavLink to="/sales" onClick={() => setBurger(false)}>
              All sales
            </NavLink>
          </li>
        </ul>
        <div className={styles.mediaBasketContainer}>
          <button className={styles.burger} onClick={() => setBurger(!burger)}>
            {!burger ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </button>
          <div className={styles.totalInBasket}>
            <NavLink to="/basket">
              <img src={shoppingBag} alt="Basket" />
              <p>{totalProducts.length}</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
