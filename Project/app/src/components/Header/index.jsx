import styles from "./styles.module.css";
import logo from "../../images/logo.svg";
import shoppingBag from "../../images/shoppingbag.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
        <button>Catalog</button>
      </div>
      <nav>
        <ul className={styles.list}>
        <li>
            <NavLink to="/mainPage">Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/propdacts">All propducts</NavLink>
          </li>
          <li>
            <NavLink to="/sales">All sales</NavLink>
          </li>
          <li>
            <NavLink to="/shoppingBag"><img src={shoppingBag} alt="Basket" /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
