import styles from "./basketConstructor.module.css";
import Back from "../../images/Back.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BasketProduct } from "./BasketProduct";
import { ClearBasketButton } from "../ClearBasketButton";
import {
  countTotalPrice,
  deletPropductFromBasket,
  addQuantityToProduct,
  deletQuantityToProduct,
} from "../../redux/basketSlice";
import { OrderForm } from "../../components/BasketComponents/OrderForm";

export const BasketConstructor = () => {
  const productsInBasket = useSelector((state) => state.basket.products);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const userSaving = useSelector((state) => state.basket.userSaving);

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
    <div className={styles.productsContainer}>
      <div className={styles.productsList}>
        <div className={styles.header}>
          <ClearBasketButton />
          <NavLink to="/propducts">
            Back to the store <img src={Back} alt="" />
          </NavLink>
        </div>

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
      <OrderForm
        totalPrice={totalPrice}
        productsOrdered={productsInBasket}
        userSaving={userSaving}
      />
    </div>
  );
};
