import styles from "./styles.module.css";
import Back from "../../images/Back.svg";
import { NavLink } from "react-router-dom";
import { BasketConstructor } from "../../components/BasketComponents";
import { ClearBasketButton } from "../../components/ClearBasketButton";
export const Basket = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Shopping cart</h2>
      <ClearBasketButton/>
      <BasketConstructor />
    </div>
  );
};
