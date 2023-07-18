import styles from "./styles.module.css";
import { useGetOneProductByCategoryQuery } from "../../redux/apiSlice";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../redux/apiSlice";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOneProductByCategoryQuery(id);
  console.log(data);
  console.log(data && data.title);

  return (
    <div>
      {isLoading ? (
        <h2>LOADING...</h2>
      ) : (  
        <div className={styles.container}>
          <h2>{data[0].title}</h2>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img src={baseUrl + data[0].image} alt="imag" />
            </div>
            <div>
                <div className={styles.priceContainer}>
                <p className={styles.price}>{data[0].discont_price ? data[0].discont_price : data[0].price}<span className={styles.dollar}>$</span></p>
      <span className={styles.discont_price}>{data[0].discont_price ? `${data[0].price}$` : ""}</span>
      <span className={styles.procent}>{data[0].discont_price ? `${Math.round(100-data[0].discont_price/(data[0].price/100))}%` : ''}</span>
                </div>
              <button className={styles.btnTpCard} onClick={() => {}}>
                To card
              </button>
              <h6>Description</h6>
              <p className={styles.description}>{data[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
