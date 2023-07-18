import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import Back from "../../images/Back.svg";
import delet from "../../images/Close.svg";
import Plus from "../../images/Plus.svg";
import Minus from "../../images/Minus.svg";
import { useParams } from "react-router-dom";
import {
  countTotalPrice,
  deletPropductFromBasket,
  addQuantityToProduct,
  deletQuantityToProduct,
} from "../../redux/basketSlice";
import { baseUrl } from "../../redux/apiSlice";

export const Basket = () => {
  const productsInBasket = useSelector((state) => state.basket.products);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const dispatch = useDispatch();

  const deletProduct = (idEl) => {
    dispatch(deletPropductFromBasket(idEl));
    dispatch(countTotalPrice());
  };

  const upQuantity = (idEl) => {
    dispatch(addQuantityToProduct(idEl));
    dispatch(countTotalPrice());
  };

  const downQuantity = (idEl) => {
    dispatch(deletQuantityToProduct(idEl));
    dispatch(countTotalPrice());
  };
  return (
    <div className={styles.wrapper}>
      <h2>Shopping cart</h2>

      <div className={styles.productsContainer}>
        <div className={styles.productsList}>
          <a href="">
            Back to the store <img src={Back} alt="" />
          </a>
          {productsInBasket &&
            productsInBasket.map((el) => (
              <div className={styles.productContainer} key={el.id}>
                <div className={styles.imgContainer}>
                  <img src={baseUrl + el.image} alt="" />
                </div>
                <p className={styles.title}>{el.title}</p>
                <div className={styles.pricesContainer}>
                  <p className={styles.price}>
                    {el.discont_price ? el.discont_price * el.quantity : el.price * el.quantity}
                    <span>$</span>
                  </p>
                  <span className={styles.discount_price}>
                    {el.discont_price ? el.price : ""}
                  </span>
                </div>
                <div className={styles.qualityBattons}>
                  <button onClick={() => downQuantity(el.id)}>
                    <img src={Minus} alt="" />
                  </button>
                  <p>{el.quantity}</p>
                  <button onClick={() => upQuantity(el.id)}>
                    <img src={Plus} alt="" />
                  </button>
                </div>
                <button
                  className={styles.delet}
                  onClick={() => deletProduct(el.id)}
                >
                  <img src={delet} alt="" />
                </button>
              </div>
            ))}
        </div>
        <div className={styles.productOrder}>
          <form action="">
            <h3>Order details</h3>
            <span>Total</span>
            <p>{totalPrice}<span className={styles.dollar}>$</span></p>
            <input type="text" />
            <button type="onSubmit">Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};
