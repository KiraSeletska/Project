import styles from "./product.module.css";
import { AddButtonForCatalogies } from "../AddButtonForCatalogies";
import { useSelector } from 'react-redux'

export const Product = ({
  discont_price,
  image,
  price,
  id,
  title,
  quantity,
  addToBascetHandler
}) => {

  const totalProducts = useSelector((state) => state.basket.products)

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      
  <AddButtonForCatalogies id={id} addToBascetHandler={addToBascetHandler} />
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
      <p className={styles.inBascetCount}>In basket: {quantity}</p> 
{/*quantity ? <p className={styles.inBascetCount}>In basket: {quantity}</p> : ''*/}
    </div>
  );
};
