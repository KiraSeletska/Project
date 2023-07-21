import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import Back from "../../images/Back.svg";
import { NavLink } from "react-router-dom";
import {
  countTotalPrice,
  deletPropductFromBasket,
  addQuantityToProduct,
  deletQuantityToProduct,
} from "../../redux/basketSlice";
import { BasketProduct } from "../../components/BasketComponents/BasketProduct";
import { OrderForm } from "../../components/BasketComponents/OrderForm";


export const Basket = () => {
  const productsInBasket = useSelector((state) => state.basket.products);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const dispatch = useDispatch();

  const deletProduct = (idEl) => {
    dispatch(deletPropductFromBasket(idEl)); //Такие повторения нормальны?
  };

  const upQuantity = (idEl) => {
    dispatch(addQuantityToProduct(idEl));
  };

  const downQuantity = (idEl) => {
    dispatch(deletQuantityToProduct(idEl));
  };
  
  return (
    <div className={styles.wrapper}>
      <h2>Shopping cart</h2>
      <div className={styles.productsContainer}>
        <div className={styles.productsList}>
          <NavLink to="/propducts">
            Back to the store <img src={Back} alt="" />
          </NavLink>
          {productsInBasket &&
            productsInBasket.map((el) => (
              <BasketProduct
                key={el.id}
                {...el}
                downQuantity={downQuantity}
                upQuantity={upQuantity}
                deletProduct={deletProduct}
              />
            ))}
        </div>
        <OrderForm totalPrice={totalPrice} productsOrdered={productsInBasket}/>
      </div>
    </div>
  );
};
