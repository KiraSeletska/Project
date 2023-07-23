import styles from "./product.module.css";
import { AddToCardMessages } from "../Messages/addToCardMesssage";
import { useState } from "react";
export const Product = ({
  discont_price,
  image,
  price,
  id,
  title,
  addToBascetHandler,
  buttonName

}) => {
  const [status, setStatus] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
        <button className={styles.addToCard} onClick={addToBascetHandler}>
          {buttonName}
        </button>
 
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.price}>
          {discont_price ? `${discont_price}$` : `${price}$`}
        </p>
        <span className={styles.discont_price}>
          {discont_price ? `${price}$` : ""}
        </span>
        <span className={styles.procent}>
          {discont_price
            ? `${Math.round(100 - discont_price / (price / 100))}%`
            : ""}
        </span>
      </div>
      <p className={styles.title}>{title}</p>

    </div>
  );
};
