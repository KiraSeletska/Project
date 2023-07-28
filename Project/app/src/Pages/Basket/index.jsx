import styles from "./styles.module.css";
import { BasketConstructor } from "../../components/BasketComponents";

export const Basket = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Shopping cart</h2>
  
      <BasketConstructor />
    </div>
  );
};
