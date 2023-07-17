import styles from "./product.module.css";

export const Product = ({ discont_price, image, price, id, title }) => {


  /*
  <p className={styles.price}>{discont_price ? `${discont_price}$` : `${price}$`}</p> 
  */
  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
        <img src={image} alt="" />
        </div>

      <div className={styles.priceContainer}>
      <p className={styles.price}>{discont_price ? `${discont_price}$` : `${price}$`}</p> 
      <span className={styles.discont_price}>{discont_price ? `${price}$` : ""}</span>
      <span className={styles.procent}>{discont_price ? `${Math.round(100-discont_price/(price/100))}%` : ''}</span>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
