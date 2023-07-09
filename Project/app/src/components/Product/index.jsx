import styles from "./product.module.css";

export const Product = ({ discont_price, image, price, id, title }) => {
  console.log(price);
  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
        <img src={image} alt="" />
        </div>

      <div className={styles.priceContainer}>
      <p className={styles.price}>{`${price}$`}</p> 
      <span className={styles.discont_price}>{discont_price ? `${discont_price}$` : ""}</span>
      <span className={styles.procent}>-10%</span>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
