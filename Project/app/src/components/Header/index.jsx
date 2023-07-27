import styles from "./styles.module.css";
import logo from "../../images/logo.svg";
import shoppingBag from "../../images/shoppingbag.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export const Header = () => {

  const totalProducts = useSelector((state) => state.basket.products)
  const totalProductsQ = useSelector((state) => state.basket)
  const showBasket = () => {
    console.log(totalProductsQ)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
         <NavLink to="/propducts"><button>Catalog</button> </NavLink>
      
      </div>
      <nav>
        <ul className={styles.list}>
        <li>
            <NavLink to="/mainPage">Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/propducts">All propducts</NavLink>
          </li>
          <li>
            <NavLink to="/sales">All sales</NavLink>
          </li>
        </ul>
        <div className={styles.totalInBasket}>
        <NavLink to="/basket"><img src={shoppingBag} alt="Basket" />
        <p>{ totalProducts.length}</p>
        </NavLink>
   
          </div>
      </nav>
    </header>
  );
};
