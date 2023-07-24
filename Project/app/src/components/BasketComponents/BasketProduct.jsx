import styles from "./basketProduct.module.css";
import { baseUrl } from "../../redux/categoriesApi";
import delet from "../../images/Close.svg";
import plus from "../../images/Plus.svg";
import minus from "../../images/Minus.svg";
//переименовтаь и добавиь / выбрать index
export const BasketProduct = ({
  id,
  image,
  title,
  price,
  discont_price,
  quantity,
  downQuantity,
  upQuantity,
  deletProduct,
}) => {
  return (
    <div className={styles.productContainer} key={id}>
      <div className={styles.imgContainer}>
        <img src={baseUrl + image} alt="" />
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.pricesContainer}>
        <p className={styles.price}>
          {discont_price
            ? discont_price * quantity
            : price * quantity}
          <span>$</span>
        </p>
        <span className={styles.discount_price}>
          {discont_price ? price : ""}
        </span>
      </div>
      <div className={styles.qualityBattons}>
        <button onClick={() => downQuantity(id)}>
          <img src={minus} alt="" />
        </button>
        <p>{quantity}</p>
        <button onClick={() => upQuantity(id)}>
          <img src={plus} alt="" />
        </button>
      </div>
      <button className={styles.delet} onClick={() => deletProduct(id)}>
        <img src={delet} alt="" />
      </button>
    </div>
  );
};
