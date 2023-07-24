import styles from "./product.module.css";
import { AddToCardMessages } from "../Messages/addToCardMesssage";
import { useState } from "react";
import { basketImage } from '../../Pages/SingleProductPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping}from '@fortawesome/free-solid-svg-icons'

export const Product = ({
  discont_price,
  image,
  price,
  id,
  title,
  addToBascetHandler
}) => {

  const basketImage =<FontAwesomeIcon icon={faCartShopping} bounce style={{color: "#393",}} />
  const defButtonText = "Add to cart";
  const [btnName, setBtnName] = useState(defButtonText)

  const onButtonClick = (event) => {
    addToBascetHandler(event);
    setBtnName( basketImage );
    setTimeout(() => setBtnName(defButtonText), 1000);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
        <button id={id} className={styles.addToCard} 
        onClick={onButtonClick}>
          {btnName}
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
