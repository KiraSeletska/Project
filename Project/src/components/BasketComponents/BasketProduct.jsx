import styles from "./basketProduct.module.css";
import { baseUrl } from "../../redux/categoriesApi";
import delet from "../../images/Close.svg";
import plus from "../../images/Plus.svg";
import minus from "../../images/Minus.svg";

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
      <p className={styles.price}>
        {((discont_price ? discont_price : price) * quantity).toFixed(2)}
        <span>$</span>
      </p>
      <p className={styles.discount_price}>
        {discont_price && (price * quantity).toFixed(2) + "$"}
      </p>
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
