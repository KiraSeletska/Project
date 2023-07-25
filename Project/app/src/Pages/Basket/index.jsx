import styles from "./styles.module.css";
import Back from "../../images/Back.svg";
import { NavLink } from "react-router-dom";
import { BasketConstructor } from "../../components/BasketComponents";

export const Basket = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Shopping cart</h2>
    { /* <div className={styles.linkContainer}>
        <NavLink to="/propducts">
          Back to the store <img src={Back} alt="" />
        </NavLink>
      </div>*/}
      <BasketConstructor />
    </div>
  );
};
